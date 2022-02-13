import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	street: string;
	selectedItem: { streetName: string } | undefined;
}

const StreetNameField:React.FC<Props> = ({id,street,selectedItem}) => {
    
    const { idToEdit } = useContext(ContactCtx);
	const { setStreetNameToEdit } = useContext(EditContactsCtx);

    const [inputStreetValue, setInputStreetValue] = useState(
		selectedItem === undefined ? street : selectedItem.streetName,
	);
    const onStreetnameChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputStreetValue(e.target.value);
			setStreetNameToEdit(e.target.value);
		} else {
			return setInputStreetValue(street);
		}
	};
    
    return (
        <td>
        <StyledInput
            type='text'
            width='250px'
            value={inputStreetValue}
            id={id}
            onChange={onStreetnameChangeHandler}
        />
    </td>
    )
}

export default StreetNameField
