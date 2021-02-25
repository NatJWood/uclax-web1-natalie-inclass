import React from 'react';
import styled from 'styled-components';

const Light = ({children}) => {

    return (
        <LightStyled className='Light'>
            {children} 
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    background-color: white;

    padding: 20px;
`;