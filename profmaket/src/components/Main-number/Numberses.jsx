import "../../css/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Numberses = () => {

 const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://cd65068-django-5gmbq.tw1.ru/api/telephone') 
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

        {data.map( telephone => (
        
        <div className="contact-number">
          <p className="contact-links">{telephone.number}</p>
        </div>

        ))}

    </div>

  )
}

export default Numberses;