import { useState } from 'react'
import axios from 'axios';
import {data, Link} from "react-router-dom"
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenit, setIsOpenit] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function openPopUp(){
    setIsOpenit(true)
  }

  function closePopUp(){
    setIsOpenit(false)
  }

  function openPopUpreg(){
    setIsOpen(true)
  }

  function closePopUpreg(){
    setIsOpen(false)
  }


  const handleReg = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {name,email, password})
      alert(response.data.message);
    } catch (err) {
      console.log(err);
      alert('Registration failed')
    }
  }


  const handLelog = async (e) => {
    e.preventDefault();
    try {
      const respon = await axios.post('http://localhost:5000/login', {name, password});
      alert(respon.data.message);
      document.cookie = `tokedata = ${respon.data.token}  path="/", expires = Fri, 31 Dec 9999 23:59:59 GMT`;
    }catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <>
      <div>

        <div className="regist">
          <button type="button" onClick={openPopUp}>
            <p>Login</p>
          </button>
          <button type="button" onClick={openPopUpreg}>
            <p>Register</p>
          </button>

        </div>

        {isOpenit && (
            <div className="popap" id="popap">
              <div className="krest">
                <button type="button" onClick={closePopUp}>
                  =
                </button>
              </div>
              <form className="popap_div" onSubmit={handLelog}>
                <div>
                  <div>
                    <input type="text" name="name" placeholder="Имя" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                  </div>
                  <div>
                    <input type="text" name="password" placeholder="password" value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                </div>
                <input type="submit" value="Submit"/>
              </form>
            </div>
        )}
        {isOpen && (
            <div className="popap" id="popap">
              <div className="krest">
                <button type="button" onClick={closePopUpreg}>
                  +
                </button>
              </div>
              <form className="popap_div" onSubmit={handleReg}>
                <div>
                  <div>
                    <input type="text" name="name" placeholder="Имя" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                    <input type="text" name="email" placeholder="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div>
                    <input type="text" name="password" placeholder="password" value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                </div>
                <input type="submit" value="Submit"/>
              </form>
            </div>
        )}
      </div>
    </>
  )
}

export default App
