import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Count() {
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    axios.get('http://cd65068-django-5gmbq.tw1.ru/api/work')
      .then(response => {
        setProjectsCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div>
        <div className="container-project">
            <p className="project-p">Всего проектов: {projectsCount}</p>
        </div>
    </div>
  );
}