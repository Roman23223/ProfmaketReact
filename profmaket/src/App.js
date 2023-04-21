import "./styles/style.css"

import logo from  "./img/logo.png";
import watsap from  "./img/watsap.png";
import strelka from  "./img/strelka.svg";
import maket from "./img/maket.png";
import works from "./img/works.png";
import geo from "./img/geo.png";


function App() {
  return (
    <div className="App">
        <div className="navbar">
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
        </div>


        <div className="header">
            <div className="header_container">

                <div className="container-proect">
                    <p className="proect-p"> Всего проектов: </p>
                </div>

                <div className="container-button">
                    <div className="buttons">
                        <a className="buttons-one" href="">Расчитать стоимость макета</a>
                        <a className="buttons-two" href="">Работы</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="section_price">
            <div className="section_container">

                <div className="container-text">
                    <h1>Сроки изготовления <br/>
                        и стоимость макета</h1>
                    <p className="text-p">Стоимость и срок изготовления макета складывается из размеров макета, степени
                        его детализации, количества и

                        сложности интерактивных элементов </p>
                </div>

                <div className="container-makets">
                    <div className="container-maket">
                        <p>Макет</p>
                        <img src={maket} alt="" />
                            <p>от 50 000 р</p>
                            <a className="buttons-three" href="">Расчитать</a>
                    </div>

                    <div className="container-maket">
                        <p>Макет</p>
                        <img src={maket} alt="" />
                            <p>от 75 000 р</p>
                            <a className="buttons-three" href="">Расчитать</a>
                    </div>

                    <div className="container-maket">
                        <p>Макет</p>
                        <img src={maket} alt="" />
                            <p>от 100 000 р</p>
                            <a className="buttons-three" href="">Расчитать</a>
                    </div>
                </div>

            </div>
        </div>


        <div className="works">
            <div className="worksa_container">

                <div className="works-name">
                    Работы
                </div>

                <div className="works-image">

                    <div className="images">
                        <img src={works} alt="" />
                    </div>

                    <div className="images">
                        <img src={works} alt="" />
                    </div>

                    <div className="images">
                        <img src={works} alt="" />
                    </div>


                </div>


            </div>
        </div>


        <div className="company">
            <div className="company_container">
                <div className="company-name">
                    О компании
                </div>

                <div className="distrubution">
                    Макетная мастерская «PROFMAKET» изготавливает макеты по архитектурным проектам зданий и комплексов.
                    Это могут быть <br/>

                    макеты уже существующих объектов, объектов, разрабатываемых в перспективное строительство, а также
                    концептуальных<br/>

                    проектов, выражающих всю полноту идеи разработчиков проекта. При проектировании и изготовлении
                    архитектурного <br/>

                    макета макетная мастерская «PROFMAKET» особое внимание уделяет точности воспроизведения общей
                    концептуальности <br/>

                    проекта, повышенной детализации объектов моделирования, максимальной демонстрации функциональности
                    объекта.<br/>
                </div>
            </div>
        </div>


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
        </div>
    </div>

  );
}

export default App;
