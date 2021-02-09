import React from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`
     
    display: flex;
    background-color: #002727;
    padding: 20px;
    justify-content: center;

.Nav {
    display: flex;
    width: 500px;
}

a {
    flex: 1; 
    text-align: center;
    display: block;
    background: teal;
    color: white;
    text-decoration: none;

    border-radius: 5px;

    padding: 10px;
    margin: 0px 5px;

    &.active {
        background-color: #004141;
    }
    &:hover {
        background-color: #00b6b6;
        color: #004141;
    }
}

`;