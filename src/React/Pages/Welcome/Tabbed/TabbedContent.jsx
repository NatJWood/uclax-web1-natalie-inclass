import React from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import TabbedNavItem from './TabbedNavItem.jsx';

const TabbedContent = ({chosenTab}) => {


    return (
        <TabbedContentStyled className='TabbedContent'>
            <img src={ chosenTab.image} alt={ chosenTab.title } />
            <h3>{ chosenTab.title } </h3>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    
    background-color: teal;
    padding: 20px;

`;