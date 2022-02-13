import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	name: string;
	selectedItem: { firstName: string } | undefined;
}

const FirstNameField: React.FC<Props> = ({ id, selectedItem, name }) => {
	const { idToEdit } = useContext(ContactCtx);
	const { setFirstNameToEdit } = useContext(EditContactsCtx);

	const [inputNameValue, setInputNameValue] = useState(
		selectedItem === undefined ? name : selectedItem?.firstName,
	);
	const onNameChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputNameValue(e.target.value);
			setFirstNameToEdit(e.target.value);
		} else {
			return setInputNameValue(name);
		}
	};

	return (
		<td >
			<StyledInput
				type='text'
				width='120px'
				value={inputNameValue}
				id={id}
				onChange={onNameChangeHandler}
				
			/>
		</td>
	);
};

export default FirstNameField;
