import React from 'react';
import angar from "./../../img/jpg/angar.jpg";
import yalta from "./../../img/jpg/yalta.jpg";
import park from "./../../img/jpg/park.jpg";

export default function Workes() {

    return (

    <div className="container-works">

        <a className="works-link" href="">
            <div className="container-work">
                <img className="work-image" src={angar} alt="" />
                <p>Военный Ангар</p>
            </div>
        </a>

        <a className="works-link" href=""> <div className="container-work">
            <img className="work-image" src={yalta} alt="" />
            <p>Жк Ялта</p>
        </div></a>
    
        <a className="works-link" href="">
            <div className="container-work">
                <img className="work-image" src={park} alt="" />
                <p>Парк</p>
            </div>
        </a>

    </div>

    )

}