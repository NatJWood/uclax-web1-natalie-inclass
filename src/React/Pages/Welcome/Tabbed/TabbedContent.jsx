import React from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import TabbedNavItem from './TabbedNavItem.jsx';

/* scripts ---------------------------*/
import {mq} from '../../../../common/media_queries.js';

const TabbedContent = ({chosenTab}) => {


    return (
        <TabbedContentStyled className='TabbedContent'>
            <div className="left">
                <img src={ chosenTab.image} alt={ chosenTab.title } />
            </div>
            <div className="right">
                <h3>{ chosenTab.title } </h3>
                <div dangerouslySetInnerHTML= { {__html: chosenTab.text }} />
            </div>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    
    background-color: teal;
    padding: 20px;

    @media ${mq.desktop} {
        display: flex;
    }



    .left {
        flex: 1;
        img {max-width: 100%;}
    }

    .right {
        flex: 4;
    }

    @media ${mq.tablet} {
        .right {
        padding: 0px 20px;
    }
    }

`;