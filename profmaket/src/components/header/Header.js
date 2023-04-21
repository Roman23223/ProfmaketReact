const Header = () => {
    return(<div className="header">
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
    </div>);

}

export default Header;