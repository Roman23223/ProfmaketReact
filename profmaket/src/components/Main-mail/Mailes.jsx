import React, { useEffect, useState } from 'react';

export default function Mailes() {
const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
fetch('http://cd65068-django-5gmbq.tw1.ru/api/email')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
setData(data);
})
.catch(error => {
setError(error);
});
}, []);

if (error) {
return <div>Error: {error.message}</div>;
} else if (!data) {
return <div>Loading...</div>;
} else {
return (
<div className="contact-mail">
{data.email}
</div>
);
}
}