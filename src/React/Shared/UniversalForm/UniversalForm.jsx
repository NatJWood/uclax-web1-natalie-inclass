import React, {useState} from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import Button from './Button.jsx';
import FieldGroup from './FieldGroup/FieldGroup.jsx'

const UniversalForm = ({fields}) => {

    const [theFields, theFieldsUpdate] = useState(fields);

    const handleFieldUpdate = (theUpdatedField) => {
        console.log('Handle Field Update', theUpdatedField.value);

        const newFields = theFields.map((field) => {
            return (field.id === theUpdatedField.id) ? theUpdatedField : field;
        });

        theFieldsUpdate(newFields);


    }

    return (
        <UniversalFormStyled className='UniversalForm'>
            <FieldGroup id='email' theFields={ theFields } handleFieldUpdate={handleFieldUpdate} />
            <FieldGroup id='message' theFields={ theFields } handleFieldUpdate={handleFieldUpdate}/>
            <Button>Send Email</Button>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;