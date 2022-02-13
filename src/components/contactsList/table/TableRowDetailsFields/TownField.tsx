import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput';

interface Props {
	id: string;
	town: string;
	selectedItem: { town: string } | undefined;
}

const TownField:React.FC<Props> = ({selectedItem,town,id}) => {
	const { idToEdit } = useContext(ContactCtx);
	const { setTownToEdit } = useContext(EditContactsCtx);
    
    const [inputTownValue, setInputTownValue] = useState(
		selectedItem === undefined ? town : selectedItem.town,
	);
    
	const onTownChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputTownValue(e.target.value);
			setTownToEdit(e.target.value);
		} else {
			return setInputTownValue(town);
		}
	};
    
    return (
        <td>
        <StyledInput
            type='text'
            width='150px'
            value={inputTownValue}
            id={id}
            onChange={onTownChangeHandler}
        />
    </td>
    )
}

export default TownField
