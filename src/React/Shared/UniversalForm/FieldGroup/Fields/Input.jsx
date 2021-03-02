import React from 'react';
import styled from 'styled-components';

const Input = ({theField, onChange}) => {

    return (
        <InputStyled 
        className='Input' 

        id={theField.id}
        value={theField.value}

        onChange = {onChange}
        />
    );
}

export default Input;

const InputStyled = styled.input`
    
`;