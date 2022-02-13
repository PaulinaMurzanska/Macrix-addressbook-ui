import React, {useContext, useState} from 'react';
import { ContactCtx } from '../../context/ContactContex';
import ContactRow from './ContactRow';

interface Props {
	fetch: () => {};
    
}

const TableBody:React.FC<Props> = ({fetch}) => {

    const {contacts,idToEdit} = useContext(ContactCtx);

    const [firstNameToEdit, setFirstNameToEdit] = useState('');
	const [lastNameToEdit, setLastNameToEdit] = useState('');
	const [streetNameToEdit, setStreetNameToEdit] = useState('');
	const [houseNumberToEdit, setHouseNumberToEdit] = useState('');
	const [apartmentsNumberToEdit, setApartmentsNumberToEdit] = useState('');
	const [postalCodeToEdit, setPostalCodeToEdit] = useState('');
	const [townToEdit, setTownToEdit] = useState('');
	const [phoneNumberToEdit, setPhoneNumberToEdit] = useState('');
	const [dateOfBirthToEdit, setDateOfBirthToEdit] = useState('');
	const selectedContact = contacts.find((obj) => obj.id === idToEdit);
	const [selectedItemId, setSelectedItemId] = useState('');
	// const [show, setShow] = useState(false);


	const itemToEditPost = {
		dateOfBirth:
			dateOfBirthToEdit === ''
				? selectedContact?.dateOfBirth
				: dateOfBirthToEdit,
		firstName:
			firstNameToEdit === ''
				? selectedContact?.firstName
				: firstNameToEdit,
		lastName:
			lastNameToEdit === '' ? selectedContact?.lastName : lastNameToEdit,
		streetName:
			streetNameToEdit === ''
				? selectedContact?.streetName
				: streetNameToEdit,
		houseNumber:
			houseNumberToEdit === ''
				? selectedContact?.houseNumber
				: houseNumberToEdit,
		apartmentsNumber:
			apartmentsNumberToEdit === ''
				? selectedContact?.apartmentsNumber
				: apartmentsNumberToEdit,
		postalCode:
			postalCodeToEdit === ''
				? selectedContact?.postalCode
				: postalCodeToEdit,
		town: townToEdit === '' ? selectedContact?.town : townToEdit,
		phoneNumber:
			phoneNumberToEdit === ''
				? selectedContact?.phoneNumber
				: phoneNumberToEdit,
	};

    return (
        <tbody>
        {contacts.map((contact) => (
            <ContactRow
                key={contact.id}
                name={contact.firstName}
                surname={contact.lastName}
                id={contact.id}
                street={contact.streetName}
                house={contact.houseNumber}
                apartment={contact.apartmentsNumber}
                postalCode={contact.postalCode}
                town={contact.town}
                birth={contact.dateOfBirth}
                phone={contact.phoneNumber}
                fetch={fetch}
                setFirstNameToEdit={setFirstNameToEdit}
                setLastNameToEdit={setLastNameToEdit}
                selectedItemId={selectedItemId}
                setSelectedItemId={setSelectedItemId}
                setStreetNameToEdit={setStreetNameToEdit}
                setHouseNumberToEdit={setHouseNumberToEdit}
                setApartmentsNumberToEdit={
                    setApartmentsNumberToEdit
                }
                setPostalCodeToEdit={setPostalCodeToEdit}
                setTownToEdit={setTownToEdit}
                setPhoneNumberToEdit={setPhoneNumberToEdit}
                setDateOfBirthToEdit={setDateOfBirthToEdit}
            />
        ))}
    </tbody>
    )
}

export default TableBody
