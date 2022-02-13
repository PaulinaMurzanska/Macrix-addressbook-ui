import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	phone: string;
    phoneFormatted:string;
	selectedItem: { phoneNumber: string } | undefined;
}
const PhoneField:React.FC<Props>= ({phoneFormatted,selectedItem,id}) => {
	const { idToEdit } = useContext(ContactCtx);
	const { setPhoneNumberToEdit } = useContext(EditContactsCtx);

	const [inputPhoneValue, setInputPhoneValue] = useState(
		selectedItem === undefined ? phoneFormatted :selectedItem.phoneNumber,
	);

	const onPhoneChangeHandler = (e:any) => {
		if (idToEdit === e.target.id) {
			const selectedPhoneFormatted =(('' + e.target.value).replace(/\D/g, ''))
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, '-');
			setInputPhoneValue(selectedPhoneFormatted);
			setPhoneNumberToEdit(e.target.value);
		} else {
			return setInputPhoneValue(phoneFormatted);
		}
	};
    return (
        <td>
        <StyledInput
            type='text'
            width='150px'
            value={inputPhoneValue}
            id={id}
            onChange={onPhoneChangeHandler}
        />
    </td>
    )
}

export default PhoneField
