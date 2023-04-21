import logo from "../../img/logo.png";
import watsap from "../../img/watsap.png";
import geo from "../../img/geo.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_container">

                <div className="footer-logo">
                    <div className="footer-image">
                        <img className="footer-image" src={logo} alt="" />
                        <h2>Prof<br/>
                            Maket</h2>
                    </div>
                    <p>Мы реализуем <br/>
                        ваши идеи.</p>
                </div>

                <div className="container-group">

                    <div className="footer-nav">
                        <a className="footer-link" href="">Главная</a>
                        <a className="footer-link" href="">Работы</a>
                        <a className="footer-link" href="">Контакты</a>
                        <a className="footer-link" href="">О нас</a>
                    </div>

                    <div className="footer-contact">

                        <div className="contact-number">
                            <img className="number-image" src={watsap} alt="" />
                            <p>8-xxxxxxxxxx</p>
                        </div>

                        <div className="contact-email">
                            <p>profmarket@mail.ru</p>
                        </div>

                        <div className="contact-adres">
                            <img className="adres-image" src={geo} alt="" />
                            <p>Ростов-на-Дону
                                Стачки </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>);
}

export default Footer;