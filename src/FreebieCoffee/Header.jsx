
import Logo from './img/logo.png';
import Revo from './img/revo.png';
import "./Header.css"

function Header() {
    return (
        <>
            <div className="Header">
            <div className="HeaderRev">
                <img src={Revo} alt=""/>
                <div>
                    <h1>YOUR</h1>
                    <h1>PERSONALIZED</h1>
                    <h1>COFFEE</h1>
                </div>
            </div>
                <div className="HeaderLogo">
                    <img src={Logo} alt=""/>
            </div>
            <div className="HeaderNav">
                <a href="">TRANG CHỦ</a>
                <a href="">COFFEE</a>
                <a href="">PHIN MẠ MÀU</a>
                <a href="">COMBO PHIN PHÊ</a>
                <a href="">GIFTSET</a>
                <a href="">LIÊN HỆ</a>
            </div>
            </div>

        </>
    )
}

export default Header