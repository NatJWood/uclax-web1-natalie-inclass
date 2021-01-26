import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled className='Nav'>
            <a href="/">Welcome</a>
            <a href="/Services">Services</a>
            <a href="/Login">Login</a>
            <a href="/Contact">Contact</a>
        </NavStyled>
    );
}

export default Nav;


const NavStyled = styled.nav`
    a {
        background: teal;
        color: white;
        text-decoration: none;

        padding: 10px;
        margin: 10px;
    }

`;
