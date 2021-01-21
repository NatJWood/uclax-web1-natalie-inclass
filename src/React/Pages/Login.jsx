import React, { useState } from 'react';

const Login = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/sun.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/moon.png');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/sun.png');
    }

    return (
        <div>
            <h1>The Sun and The Moon</h1>
            <img
            src={ imageSrc } 
            alt= 'The Sun and Moon'
            onMouseOver={ imageOver }
            onMouseOut= { imageOut }
            />
        </div>
    )
}

export default Login;