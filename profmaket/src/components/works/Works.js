import works from "../../img/works.png";

const Works = () => {
    return( <div className="works">
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
    </div>);
}
export default Works;