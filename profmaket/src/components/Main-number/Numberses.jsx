import "../../css/styles.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Numberses = () => {
  const [data, setData] = useState('');

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
    <div className="contact-number">
      {data.number}
    </div>
  );
};

export default Numberses;