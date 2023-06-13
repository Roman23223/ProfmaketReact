import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../css/style-works.css";




export default function Workss() {

    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('https://admin.prof-maket.ru/api/work')
    .then(response => {
    console.log(response.data);
    setData(response.data);
    })
    .catch(error => {
    console.error(error);
    });
    }, []);


    return (

        <div className="section_work">
            <div className="work_container">
                <div className="container-works">

                    {
                    data.map(item => (
                    <a className="works-link" href={`Work/${item.id}`} key={item.id}>
                        <div className="container-work">
                            {item.images && item.images.length > 0 && (
                                <img src={item.images[0].image} alt={item.images[0].title} className="work-image" />
                            )}
                            <p className="works-podtitle">{item.title}</p>
                        </div>
                    </a>
                
                    ))
                    }
                </div>

            </div>

    </div>

    )

}