import "./PersonalizedCoffee.css"
import Ic from "./img/ic.png"

function PersonalizedCoffee() {
    return (
        <>
            <div className="PersonalizedCoffee">
                <div className="PersonalizedCoffeeText">
                    <p>Your Personalized Coffee</p>
                    <h1>COFFEE BUILD YOUR BASE</h1>
                </div>
                <div className="PersonalizedCoffeeBlokM">
                    <div className="PersonalizedCoffeeBlok">
                        <img src={Ic} alt=""/>
                        <h1>Nguồn gốc</h1>
                        <p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
                    </div>
                    <div className="PersonalizedCoffeeBlok">
                        <img src={Ic} alt=""/>
                        <h1>Nguồn gốc</h1>
                        <p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
                    </div>  <div className="PersonalizedCoffeeBlok">
                        <img src={Ic} alt=""/>
                        <h1>Nguồn gốc</h1>
                        <p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
                    </div>
                    <div className="PersonalizedCoffeeBlok">
                        <img src={Ic} alt=""/>
                        <h1>Nguồn gốc</h1>
                        <p>Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PersonalizedCoffee;