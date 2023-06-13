import "../../css/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Numberses = () => {

 const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://admin.prof-maket.ru/api/telephone') 
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