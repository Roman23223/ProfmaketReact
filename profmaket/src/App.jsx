import "./css/styles.css";

import { NavLink } from 'react-router-dom';

import logo from "./img/png/write-logo.png";
import Navbar from "./components/Navbar/Navbar";
import Count from "./components/Count/Count";
import Numberses from "./components/Main-number/Numberses";
import Mailes from "./components/Main-mail/Mailes";
import Adresses from "./components/Main-adress/Adresses";
import Workss from "./components/Works-big/Workss";

    function App() {
        return (

        <div className="App">
          

            <Navbar/>

            <div className="header">
                <div className="header_container">

                    <Count/>

                    <div className="container-button">
                        <div className="buttons">
                        <NavLink className="buttons-one" to="/Forms">Расчитать стоимость макета</NavLink>
                        <NavLink className="buttons-two" to="/Works">Работы</NavLink>
                        </div>
                    </div>
                </div>
            </div>


        

                    <div className="container-tekst">
                        <p>Работы</p>
                    </div>



            <Workss/>

            <div className="footter">
                <div className="row">
                    <div className="col">

                        <div className="footer-logo">
                            <img className="footer-logo-image" src={logo} alt="" />
                            <div className="logo-text">
                                <p>Мы реализуем <br/>
                                    ваши идеи</p>
                            </div>
                        </div>

                        <div className="footer-group">

                            <div className="footer-nav">

                                <div className="nav-link">
                                    <NavLink to="/App" className="links" >Главная</NavLink>
                                </div>

                                <div className="nav-link">
                                    <NavLink to="/Works" className="links">Работы</NavLink> 
                                </div>

                                <div  className="nav-link">
                                    <NavLink to="/Contacts"className="links" >Контакты</NavLink>
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
    
export default App;

