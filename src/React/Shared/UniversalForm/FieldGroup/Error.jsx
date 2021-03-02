import React from 'react';
import styled from 'styled-components';

const Error = ({theField}) => {

    if (!theField.errors) { return ''; }

    return (
        <ErrorStyled className='Error'>
            Error 
        </ErrorStyled>
    );
}

export default Error;

const ErrorStyled = styled.div`
    
`;