import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	postalCode: string;
	selectedItem: { postalCode: string } | undefined;
}

const PostCodeField:React.FC<Props>= ({selectedItem,postalCode,id}) => {

	const { idToEdit } = useContext(ContactCtx);
	const { setPostalCodeToEdit } = useContext(EditContactsCtx);
	const [inputPostcodeValue, setInputPostcodeValue] = useState(
		selectedItem === undefined ? postalCode : selectedItem.postalCode,
	);
    const onPostcodeChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputPostcodeValue(e.target.value);
			setPostalCodeToEdit(e.target.value);
		} else {
			return setInputPostcodeValue(postalCode);
		}
	};
    
    return (

        <td>
        <StyledInput
            type='text'
            width='100px'
            value={inputPostcodeValue}
            id={id}
            onChange={onPostcodeChangeHandler}
        />
    </td>
    )
}

export default PostCodeField
