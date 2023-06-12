import "./../css/style-contacts.css";

import logo from "./../img/png/write-logo.png";
import Navbar from "./../components/Navbar/Navbar";
import Numberses from "./../components/Main-number/Numberses";
import Mailes from "./../components/Main-mail/Mailes";
import Adresses from "./../components/Main-adress/Adresses";
import Contactss from "../components/contacts/Contactss";
import Titlec from "../components/Title-contacts/Titlec";

    function Contacts() {
        return (

            <div className="Contacts">
                
                <Navbar/>


                <Titlec/>
                
                <Contactss/>


            <div class="section-map">
                <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12616.582018245963!2d39.634163008936!3d47.20899649116514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDEyJzQ5LjciTiAzOcKwMzgnMjguMiJF!5e0!3m2!1sru!2sru!4v1685329490350!5m2!1sru!2sru" width="100%" height="370"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="footterr">
                <div className="row">
                    <div className="col">

                        <div className="footer-logo">
                            <img className="footer-logo-image" src={logo} alt=""/>
                            <div className="logo-text">
                                <p>Мы реализуем <br/>
                                    ваши идеи</p>
                            </div>
                        </div>

                    <div className="footer-group">

                            <div className="footer-nav">
                                <div className="nav-link">
                                    <a className="links" href="">Главная</a>
                                </div>

                                <div className="nav-link">
                                    <a className="links" href="">Работы</a>
                                </div>

                                <div  className="nav-link">
                                    <a className="links" href="">Контакты</a>
                                </div>


                                    <Numberses/>

                                    <Mailes/>

                                    <Adresses/>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

        </div>
           
    
        );
    }
    
export default Contacts;
