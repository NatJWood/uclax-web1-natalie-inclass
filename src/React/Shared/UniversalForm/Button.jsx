import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled 
        className='Button'
        type={type}>
            {children}
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: white;
    padding: 10px 20px;
    font-size: 18px;
    border: solid 3px black;
    border-radius: 5px;
`;