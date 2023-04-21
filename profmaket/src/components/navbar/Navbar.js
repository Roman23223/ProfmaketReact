import logo from "../../img/logo.png";
import watsap from "../../img/watsap.png";
import strelka from "../../img/strelka.svg";

const Navbar = () => {
    return( <div className="navbar">
        <div className="navbar_container">

            <div className="nav">
                <div className="nav_logo">
                    <img className="logo-image" src={logo} alt="" />
                    <p>Prof <br/>
                        Maket</p>

                </div>


                <a href="">Главная</a>
                <a href="">Работы</a>
                <a href="">Контакты</a>

                <div className="watsap_container">
                    <img className="image" src={watsap} alt="" />
                    <a href="">8-xxxxxxxxxx</a>
                </div>

                <div className="button">
                    <p className="button_p"><a href="">Расчитать Макет</a></p>
                </div>

                <div className="language_container">
                    <p>РУ</p>
                    <img src={strelka} alt="" />
                </div>


            </div>

        </div>
    </div>);
}
export default Navbar;