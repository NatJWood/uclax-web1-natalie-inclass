import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Light = ({onHide, children, width}) => {

    const handleStopProp = (event) => {
        event.stopPropagation();
    }

    return (
        <LightStyled 
        className='Light'
        onClick={ handleStopProp}
        width={width}
        >
            <button className='close'
            onClick={onHide}>
                <FontAwesomeIcon icon={ faTimes } />
            </button>
            {children} 
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    background-color: white;

    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 340px;
    transform: translate(-50%, -50%);

    width: ${({width}) => width};

    button.close {
        background-color: white;
        border-radius: 50%;
        width: 30px;
        height: 30px;

        margin: 0px;
        padding: 0px;
        border: none;

        box-shadow: 3px 0px 10px rgba(0,0,0,.5);

        cursor: pointer;
        
        position: absolute;
        right: -10px;
        top: -10px;
    }

`;