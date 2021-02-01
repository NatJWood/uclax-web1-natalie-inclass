import React, { useState } from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import TabbedNav from './TabbedNav.jsx';
import TabbedContent from './TabbedContent.jsx';

/* script ---------------------------*/
import { tabItems } from './TabbedData.js';

const Tabbed = () => {

    const [ chosenTab, chosenTabUpdate ] = useState(tabItems[1]);

    const changeTabs = () => {
        chosenTabUpdate(tabItems[2]);
    }

    return (
        <TabbedStyled className='Tabbed'>
            <TabbedNav changeTabs={ changeTabs } />
            <TabbedContent chosenTab={ chosenTab }/>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;