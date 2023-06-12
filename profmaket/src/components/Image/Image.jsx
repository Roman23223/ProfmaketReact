import React from 'react';

function Image({ src, alt, onClick }) {
return (
<img src={src} alt={alt} onClick={onClick} style={{ maxWidth: '90%' }} />
);
}

export default Image;