import React, {useState} from 'react';
import styled from 'styled-components';

/* scripts ---------------------------*/
import {mq} from '../../../../common/media_queries.js'

/* components ---------------------------*/
import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';

const StaffMember = ({member}) => {

    const [showLightbox, showLightboxUpdate] = useState(false);

    const handleOnHide = () => {
        console.log('closing lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);
    }


    return (
        <StaffMemberStyled className='StaffMember'>
            <div onClick={handleOnShow} className='piece'>
                <img src={member.image} />
                <h3>{member.name}</h3>
                <Lightbox />
            </div>

            <Lightbox 
                show={showLightbox}
                onHide={handleOnHide}
                width='200px'
            >
                <img src={member.image} alt={member.name} />
                <h2>{member.name}</h2>
                
            </Lightbox>

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

    .piece {
        h2 {
            position: absolute;
            bottom: 0px; left: 0px; right: 0px;
            background-color: rgba(255, 255, 255, 0.6);
            margin: 0px;
            padding: 0px;
        }

        h3 {
            position: absolute;
            top: 0px; left: 0px; right: 0px;
            background-color: rgba(255, 255, 255, 0.6);
            margin: 0px;
            padding: 5px;
            text-align: right;
        }
    }

    .Lightbox {
        img {
            display: block;
            max-width: 100%;
        }
        h2 {
            background-color: maroon;
            color: white;
            padding: 10px;
            margin: 0px;
        }
    }
`;