import React from 'react';
import styled from 'styled-components';
import TabbedNavItem from './TabbedNavItem';

const TabbedNav = ({changeTabs}) => {

    return (
        <TabbedNavStyled className='TabbedNav'>
            TabbedNav 

            <button onClick={ changeTabs }>HELLO</button>

            <TabbedNavItem />
        </TabbedNavStyled>
    );
}

export default TabbedNav;

const TabbedNavStyled = styled.div`
    
`;