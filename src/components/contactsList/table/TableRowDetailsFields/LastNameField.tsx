import React,{useState, useContext} from 'react';
import { ContactCtx } from '../../../../context/ContactContex';
import { EditContactsCtx } from '../../../../context/EditContext';
import { StyledInput } from '../../../styledComponents/StyledInput'

interface Props {
	id: string;
	surname: string;
	selectedItem: { lastName: string } | undefined;
}
const LastNameField:React.FC<Props> = ({id, surname, selectedItem}) => {
	const { idToEdit } = useContext(ContactCtx);
	const { setLastNameToEdit } = useContext(EditContactsCtx);
	const [inputLastnameValue, setInputLastnameValue] = useState(
		selectedItem === undefined ? surname : selectedItem?.lastName,
	);
    const onLastnameChangeHandler = (e: any) => {

		if (idToEdit === e.target.id) {
			setInputLastnameValue(e.target.value);
			setLastNameToEdit(e.target.value);
		} else {
			return setInputLastnameValue(surname);
		}
	};
    return (
        <td>
        <StyledInput
            type='text'
            width='140px'
            value={inputLastnameValue}
            id={id}
            onChange={onLastnameChangeHandler}
        />
    </td>
    )
}

export default LastNameField
