import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

/* components ---------------------------*/
import Nav from './Nav.jsx';


const NavMobile = () => {

    return (
        <NavMobileStyled className='NavMobile'>
            <div className="hamburger">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="nav-wrapper">
                <Nav />
            </div>
        </NavMobileStyled>
    );
}

export default NavMobile;

const NavMobileStyled = styled.div`

    .hamburger {
        cursor: pointer;
        
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: 1001;

        width: 50px;
        height: 50px;

        background-color: yellow;

        text-align: center;
        padding-top: 9px;

        svg {
            font-size: 30px;
        }
    }

 

    .nav-wrapper {
        background-color: white;

        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        
        z-index: 1000;
    }

    .Nav {
        margin-top: 70px;
    }

    a {
        display: block;
        background: teal;
        color: white;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 5px;

        &.active {
        background-color: #004141;
    }
    &:hover {
        background-color: #00b6b6;
        color: #004141;
    }
    }
`;