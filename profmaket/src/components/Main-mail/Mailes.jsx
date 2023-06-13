import "../../css/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Mailes = () => {

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
        
        <div className="contact-mail">
            
            <p className="contact-links">{email.title} - {email.email}</p>

        </div>

        ))}

    </div>

  )
}

export default Mailes;