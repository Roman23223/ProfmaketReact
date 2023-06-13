import React, {useEffect,useState} from 'react';
import $ from "jquery";
import IMask from 'imask';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


import name from "./../../img/svg/name.svg";
import telephone from "./../../img/svg/telephone.svg";
import email from "./../../img/svg/email.svg";
import message from "./../../img/svg/message.png";


export default function Formss() {
    
    const [valueSize, setValueSize] = useState('');
    const [errors, setErrors] = useState({});

    const handleClickSize = (event) => {
        setValueSize(event.target.textContent);
    };
    
    const [redirectToHome, setRedirectToHome] = useState(false);


    const [valueTime, setValueTime] = useState('');

    const handleClickTime = (event) => {
        setValueTime(event.target.textContent);
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
    };  


    useEffect(() => {

        $(".result_size").on('click', function(e) {
            e.preventDefault();
            $(".result_size").removeClass('selected');
            $(this).toggleClass('selected');
        })
        $(".result_time").on('click', function(e) {
            e.preventDefault();
            $(".result_time").removeClass('selected');
            $(this).toggleClass('selected');
        })


        var element = document.getElementById('phone');
        var maskOptions = {
          mask: '+{7}(000)000-00-00'
        };
        var mask = IMask(element, maskOptions);
    })


    const handleSubmit = async (event) => {
        event.preventDefault();

        const size = document.getElementById('size').value;
        const product_time = document.getElementById('product_time').value;
        const sender_name = document.getElementById('name').value;
        const number = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        try {
        const response = await axios.post("http://cd65068-django-5gmbq.tw1.ru/api/application/create", { 
            size, 
            product_time, 
            sender_name, 
            number, 
            email, 
            comment
        });
        console.log(response.data);
        if (response.status === 201) {
            setRedirectToHome(true);
        }
        } catch (error) {
        if (error.response) {
        // Запрос сделан, и сервер ответил с ошибкой
        console.log(error.response.data);
        setErrors(error.response.data);
        } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        console.log(error.request);
        } else {
        // Произошло что-то при настройке запроса, вызвавшее ошибку
        console.log("Error", error.message);
        }
        }
        };


    return (
        

            <div className="form_container">
                {redirectToHome && <Navigate to="/" />}
                <form  onSubmit={handleSubmit}>

                    <div className="brief">
                        <h3 className="brief-text">Заполните бриф</h3>
                    </div>

                    <hr/>

                    <div className="maket_size_container">

                        <h3 className="maket-text">Размер макета</h3>


                        <ul className="select-step_btn">
                            <li><div onClick={handleClickSize} className="step_btn result_size" >Не знаю</div></li>
                            <li><div onClick={handleClickSize} className="step_btn result_size" >До 0.5х0.5 м</div></li>
                            <li><div onClick={handleClickSize} className="step_btn result_size" >До 1х1 м</div></li>
                            <li><div onClick={handleClickSize} className="step_btn result_size" >От 1.5х2 м до 2х2 м</div></li>
                            <li><div onClick={handleClickSize} className="step_btn result_size" >От 2х3 м и более</div></li>
                        </ul>
                        
                        <input type="text" id="size" value={valueSize}/>
                        {errors.size &&  <div className="upper">{errors.size}</div>}
                    
                    </div>
                
                    <div className="product_time_container">

                        <h3 className="maket-text">Срок изготовления макета</h3>

                        <ul className="select-step_btn">
                            <li><div onClick={handleClickTime} className="step_btn result_time" >Не знаю</div></li>
                            <li><div onClick={handleClickTime} className="step_btn result_time" >от 3-х дней</div></li>
                            <li><div onClick={handleClickTime} className="step_btn result_time" >1 неделя</div></li>
                            <li><div onClick={handleClickTime} className="step_btn result_time" >1 месяц</div></li>
                            <li><div onClick={handleClickTime} className="step_btn result_time" >От 1 месяца</div></li>
                        </ul>
                        

                        <input type="text" id="product_time" value={valueTime}/>
                        {errors.product_time &&  <div className="upper">{errors.product_time}</div>}
                    </div>

                    <h3 className="maket-text">Контактные данные</h3>

                    <div className="contact_details_container">
                        <div className="container_form_group">

                            <div className="input_name">
                                <img className="input-image" src={name} alt=""/>
                                <input  className="input_form" id="name" type="text" placeholder="Ваше имя"/>
                                {errors.sender_name &&   <div className="down">{errors.sender_name}</div> }
                            </div>

                            <div className="input_phone">

                                <img className="input-image" src={telephone} alt=""/>

                                <input className="input_form" id="phone" type="tel" pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?" placeholder="Номер телефона"/>
                                {errors.number && <div className="down">{errors.number}</div> }
                            </div>

                            <div className="input_email">
                                <img className="input-image" src={email} alt=""/>
                                <input className="input_form" id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Электронная почта"/>
                                {errors.email && <div className="down">{errors.email}</div> }
                            </div>
                        </div>
                    
                        <div className="input_comment">
                            <img className="input-image" src={message} alt=""/>
                            <input className="input_form" id="comment" type="text" placeholder="Ваш комментарий (Не обязательно)"/>
                            {errors.comment &&  <div className="down">{errors.comment}</div>}
                        </div>
                        <div className="upper"></div>
                    </div>

                    <div className="button_form">
                    
                   

                    <div className="container-agreement">
                        <p>
                            <input className="checkboxing"  type="checkbox" checked={isChecked} onChange={handleCheckboxChange} required />
                                Я согласен с политикой конфиденциальности
                        </p>
                    </div>

                    <button type="submit" className="form_action">Отправить заявку</button>

                    {!isChecked && (
                    <div className="container-config" style={{ color: 'red' }}>
                         Для продолжения необходимо согласиться с нашей политикой конфиденциальности
                    </div>
                     )}

                    </div>

                    
                </form>
        
            </div>

    )

}