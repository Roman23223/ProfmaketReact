import "./../css/style-works.css";

import logo from "./../img/png/write-logo.png";
import Navbar from "./../components/Navbar/Navbar";
import Numberses from "./../components/Main-number/Numberses";
import Mailes from "./../components/Main-mail/Mailes";
import Adresses from "./../components/Main-adress/Adresses";
import Title from "../components/Title-works/Title";
import Workss from "../components/Works-big/Workss";

    function Works() {
        return (

        <div className="Works">
            
            <Navbar/>


            <Title/>
            
            <Workss/>

            <div className="footerrr">
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
    
export default Works;

