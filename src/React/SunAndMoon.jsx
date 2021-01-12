import React, { useState } from 'react';

const SunAndMoon = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/sun.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/moon.png');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/sun.png');
    }

    return (
        <div>The Sun and The Moon
            <img
            src={ imageSrc } 
            onMouseOver={ imageOver }
            onMouseOut= { imageOut }
            />
        </div>
    )
}

export default SunAndMoon;