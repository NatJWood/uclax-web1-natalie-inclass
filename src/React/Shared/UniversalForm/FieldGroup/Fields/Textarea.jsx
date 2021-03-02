import React from 'react';
import styled from 'styled-components';

const Textarea = ({theField, onChange}) => {

    return (
        <TextareaStyled 
        className='Textarea' 

        id={theField.id}
        value={theField.value}

        onChange={onChange}
        />
    );
}

export default Textarea;

const TextareaStyled = styled.textarea`
    
`;