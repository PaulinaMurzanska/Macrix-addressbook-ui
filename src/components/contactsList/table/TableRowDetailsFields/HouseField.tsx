import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	house: string;
	selectedItem: { houseNumber: string } | undefined;
}
const HouseField:React.FC <Props> = ({selectedItem,house,id}) => {
	const { idToEdit } = useContext(ContactCtx);
	const { setHouseNumberToEdit } = useContext(EditContactsCtx);
    const [inputHouseValue, setInputHouseValue] = useState(
		selectedItem === undefined ? house : selectedItem.houseNumber,
	);
    const onHouseChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputHouseValue(e.target.value);
			setHouseNumberToEdit(e.target.value);
		} else {
			return setInputHouseValue(house);
		}
	};
    return (
        <td>
        <StyledInput
            type='text'
            width='60px'
            value={inputHouseValue}
            id={id}
            onChange={onHouseChangeHandler}
        />
    </td>
    )
}

export default HouseField
