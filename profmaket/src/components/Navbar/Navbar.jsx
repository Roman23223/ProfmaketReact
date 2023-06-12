import React from 'react';
import logo2 from "./../../img/png/logo2.png";

import { NavLink } from 'react-router-dom';

export default function Navbar() {


    return (

        <nav>
		<a href="#"><img className="logo-image" src={logo2} alt="" /></a> 

		<label for="toggler">
			<i className="fa fa-bars">  </i>
		</label>

			<input type="checkbox" id="toggler" name="" />

		<div className="menu">
			<ul className="list">

				<li><NavLink to="/" >Главная</NavLink></li>
				<li><NavLink to="/Works">Работы</NavLink></li>
				<li><NavLink to="/Contacts">Контакты</NavLink></li>
				<li><NavLink to="/Forms" className="list-links">Расчитать макет</NavLink></li>
			</ul>
		</div>
	</nav>

    )

}