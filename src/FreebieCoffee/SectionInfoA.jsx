import "./SectionInfoA.css"
import axios from "axios";
import React, { useState, useEffect } from 'react';
function SectionInfoA() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const API_URL = 'http://localhost:5000/infoA'; // Убедитесь, что URL соответствует вашему серверу

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setData(response.data);
            setError('');
        } catch (err) {
            setError('Ошибка при загрузке данных: ' + err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`${API_URL}/${editingId}`, formData);
            } else {
                await axios.post(API_URL, formData);
            }
            setFormData({ name: '', description: '' });
            setEditingId(null);
            fetchData();
        } catch (err) {
            setError('Ошибка при сохранении: ' + err.message);
        }
    };

    const handleEdit = (item) => {
        setFormData({
            name: item.name,
            description: item.description
        });
        setEditingId(item.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchData();
        } catch (err) {
            setError('Ошибка при удалении: ' + err.message);
        }
    };


    return (
        <>
            <div  >
                <h1>Управление InfoA</h1>


                <form onSubmit={handleSubmit} >
                    <h2>{editingId ? 'Редактировать запись' : 'Добавить новую запись'}</h2>
                    <div>
                        <label>
                            Название:
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
                        </label>
                    </div>
                    <div>
                        <label>Описание:<input type="text" name="description" value={formData.description} onChange={handleInputChange} required/>
                        </label>
                    </div>
                    <button type="submit">
                        {editingId ? 'Обновить' : 'Добавить'}
                    </button>
                    {editingId && (
                        <button type="button" onClick={() => {setFormData({name: '', description: ''});setEditingId(null);}}>
                            Отмена
                        </button>
                    )}
                </form>
                <div>
                    <h1>Список записей</h1>
                    {data.length === 0 ? (
                        <p>Нет данных для отображения</p>
                    ) : (
                        <table>
                            <thead>
                            <tr style={{borderBottom: '1px solid #ddd'}}>
                                <th>ID</th>
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map(item => (
                                <tr key={item.id} style={{borderBottom: '1px solid #ddd'}}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button onClick={() => handleEdit(item)}>
                                            Редакт.
                                        </button>
                                        <button onClick={() => handleDelete(item.id)}>
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    )
}

export default SectionInfoA;