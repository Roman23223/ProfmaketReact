import next from "../../img/png/next.png";
import "../../css/style-contacts.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Emails = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://admin.prof-maket.ru/api/email') 
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
            {data.map( email => (

                <div class="container-contact">

                    <div className="contact-group">
                        <img class="contact-image" src={next} alt=""/>
                        <p className="contact-titles" >Электронаая почта</p>
                    </div>

                    <div>
                        <p className="contact-podtitles"> {email.title} - {email.email} </p>
                    </div>
                </div>

            ))}

        </div>


     );
}
 
export default Emails;