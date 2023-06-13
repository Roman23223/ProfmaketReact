import "../css/style-work.css";
import { NavLink, Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Numberses from '../components/Main-number/Numberses';
import Mailes from '../components/Main-mail/Mailes';
import Adresses from '../components/Main-adress/Adresses';
import logo from "../img/png/write-logo.png";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from '../components/Image/Image';
import "../css/style-work.css";
import { useParams } from 'react-router-dom';


export default function Work() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
    setSelectedImage(src);
    };

    const handleCloseClick = () => {
    setSelectedImage(null);
    };

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const {id} = useParams();

    useEffect(() => {


        axios.get(`http://cd65068-django-5gmbq.tw1.ru/api/work/${id}/`)
        .then(response => {
        console.log(response.data);
        setData(response.data);
        })
        .catch(error => {
        console.error(error);
        setError(true);
        });
    }, []);

return (
<div className="Work">

    { error ? (
        <div>
            <h1>Не найдена</h1>
            <p><Link to="/">Перейти на главную </Link> </p>
        </div>
    ) : (
        <div>
      
          <Navbar/>

          <div className="card-container">

            <div className="card-text">

            <h2 className="card-title">{data.title}</h2>

            <p className="card-podtitle">{data.content}</p>

            </div>
        
            <div className="card-images">
            { data.images?.map(image  => (
                <Image  key={image.image } src={image.image} alt={image.title} onClick={() => handleImageClick(image.image)} />
            ))}
            </div>

            </div>

            {selectedImage && (
            <div
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}
            onClick={handleCloseClick}
            >
            <img
            src={selectedImage}
            alt="Selected Image"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
            />
            </div>
            )}

          <div className="footerr">
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
                                    <NavLink to="/App" className="links" >Главная</NavLink>
                                </div>

                                <div className="nav-link">
                                    <NavLink to="/Works" className="links">Работы</NavLink> 
                                </div>

                                <div  className="nav-link">
                                    <NavLink to="/Contacts"className="links" >Контакты</NavLink>
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
    )
    }

</div>
);
}

