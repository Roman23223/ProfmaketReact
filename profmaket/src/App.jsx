import "./css/styles.css";

import logo from "./img/png/write-logo.png";
import Navbar from "./components/Navbar/Navbar";
import Count from "./components/Count/Count";
import Price from "./components/Price/Price";
import Workes from "./components/Works-small/Workes";
import Numberses from "./components/Main-number/Numberses";
import Mailes from "./components/Main-mail/Mailes";
import Adresses from "./components/Main-adress/Adresses";

    function App() {
        return (

        <div className="App">
          

            <Navbar/>

            <div className="header">
                <div className="header_container">

                    <Count/>

                    <div className="container-button">
                        <div className="buttons">
                            <a className="buttons-one" href="">Расчитать стоимость макета</a>
                        <a className="buttons-two" href="">Работы</a>
                        </div>
                    </div>
                </div>
            </div>

            
            <Price/>


            <div className="section_work">
                <div className="work_container">

                    <div className="container-tekst">
                        <p>Работы</p>
                    </div>

                    <Workes/>

                </div>
            </div>

            <div className="footer">
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
    
export default App;

