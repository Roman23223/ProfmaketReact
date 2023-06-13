import next from "../../img/png/next.png";
import "../../css/style-contacts.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Adress = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://cd65068-django-5gmbq.tw1.ru/api/address') 
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return ( 

        <div>
            {data.map( address => (

                <div class="container-contact">

                    <div className="contact-group">
                        <img class="contact-image" src={next} alt=""/>
                        <p className="contact-titles" >Адрес</p>
                    </div>

                    <div>
                        <p className="contact-podtitles"> {address.address} </p>
                    </div>
                </div>

            ))}

        </div>

        

     );
}
 
export default Adress;