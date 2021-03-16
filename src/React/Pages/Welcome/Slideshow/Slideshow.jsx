import React from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide from './Slide.jsx';
import {slides } from '../../../../common/slidesData.js';

const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
            >
                {
                    slides.map((slide, idx) => {
                        return <Slide key={idx} slide={slide} />
                    })
                }
            </Carousel>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    margin: 50px 0px;

    .carousel .slide .legend {
        background-color: teal;
    }
`;