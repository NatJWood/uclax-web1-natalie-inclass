import React from 'react';
import styled from 'styled-components';

/* scripts ---------------------------*/
import {mq} from '../../../../common/media_queries.js'

/* components ---------------------------*/
import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={member.image} />
            <h3>{member.name}</h3>
            <Lightbox />
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    margin: 10px;
    width: 100px;

    @media ${mq.tablet} {
        width: 150px; margin: 15px;
    }

    @media ${mq.desktop} {
        width: 200px; margin: 20px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    h3 {
        color: white;
        background-color: maroon;
        font-size: 16px;
        padding: 5px;
        margin: 0px;
    }
`;