import "../../css/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Adresses = () => {

 const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://admin.prof-maket.ru/api/address') 
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
        
        <div className="contact-adress">
            <p className="contact-links">{address.address}</p>
        </div>

        ))}

    </div>

  )
}

export default Adresses;