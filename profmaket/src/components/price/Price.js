import maket from "../../img/maket.png";

const Price = () => {
    return(<div className="section_price">
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
    </div>);
}
export default Price;