import React from 'react';
import angar from "./../../img/jpg/angar.jpg";
import yalta from "./../../img/jpg/yalta.jpg";
import park from "./../../img/jpg/park.jpg";
import "./../../css/styles.css";

export default function Workes() {

    return (

    <div className="container-works">

        <a className="works-link" href="">
            <div className="container-work">
                <img className="work-image" src={angar} alt="" />
                <p className="works-title">Военный Ангар</p>
            </div>
        </a>

        <a className="works-link" href=""> <div className="container-work">
            <img className="work-image" src={yalta} alt="" />
            <p className="works-title">Жк Ялта</p>
        </div></a>
    
        <a className="works-link" href="">
            <div className="container-work">
                <img className="work-image" src={park} alt="" />
                <p className="works-title">Парк</p>
            </div>
        </a>

    </div>

    )

}