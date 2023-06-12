import React from 'react';

import next from "./../../img/png/next.png";


export default function Contactss() {


    return (

        <div class="section_contact">
            <div class="contact_container">

                <div class="container-contacts">

                    <div class="container-contact">
                        <img class="contact-image" src={next} alt=""/>
                        <p className="contact-title"> Адрес </p>
                    </div>

                    <div class="container-contact">
                        <img class="contact-image" src={next} alt=""/>
                        <p className="contact-title">Телефон</p>
                    </div>

                    <div class="container-contact">
                        <img class="contact-image" src={next} alt=""/>
                        <p className="contact-title">Электронная почта</p>
                    </div>

                </div>

            </div>
        </div>

    )

}