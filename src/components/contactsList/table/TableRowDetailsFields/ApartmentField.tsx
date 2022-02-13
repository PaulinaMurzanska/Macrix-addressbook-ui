import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	apartment: string;
	selectedItem: { apartmentsNumber: string } | undefined;
}


const ApartmentField:React.FC<Props> = ({selectedItem,apartment,id}) => {
    
    const { idToEdit } = useContext(ContactCtx);
	const { setApartmentsNumberToEdit } = useContext(EditContactsCtx);
    
    const [inputApartmentValue, setInputApartmentValue] = useState(
		selectedItem === undefined ? apartment : selectedItem?.apartmentsNumber,
	);
    const onApartmentChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputApartmentValue(e.target.value);
			setApartmentsNumberToEdit(e.target.value);
		} else {
			return setInputApartmentValue(apartment);
		}
	};
    return (
        <td>
        <StyledInput
            type='text'
            width='40px'
            value={inputApartmentValue}
            id={id}
            onChange={onApartmentChangeHandler}
        />
    </td>
    )
}

export default ApartmentField
