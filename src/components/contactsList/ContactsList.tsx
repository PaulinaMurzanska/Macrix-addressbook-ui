import React, { useContext, useState } from 'react';
import { ContactCtx } from '../../context/ContactContex';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import ContactRow from './ContactRow';
import { baseUrl } from '../../constants/Endpoints';
import AlertSubmit from '../atoms/AlertSubmit';
import TableHeadFields from './TableHeadFields';
import {StyledWrapper,StyledButtonsWrapper} from "../atoms/StyledTableComponnets"
import StyledTableButtons from '../atoms/StyledTableButtons';
import TableBody from './TableBody';
import { EditContactsCtx } from '../../context/EditContext';


interface Props {
	fetch: () => {};
}



const ContactsList: React.FC<Props> = ({ fetch }) => {
	const {
		contacts,
		idToEdit,
		setRowActive,
		setIdToEdit,
	} = useContext(ContactCtx);

    const {firstNameToEdit,
        lastNameToEdit,streetNameToEdit,
        houseNumberToEdit,
        apartmentsNumberToEdit,
        postalCodeToEdit,
        townToEdit,
        phoneNumberToEdit,
        dateOfBirthToEdit,
    } =useContext(EditContactsCtx);

	// const [firstNameToEdit, setFirstNameToEdit] = useState('');
	// const [lastNameToEdit, setLastNameToEdit] = useState('');
	// const [streetNameToEdit, setStreetNameToEdit] = useState('');
	// const [houseNumberToEdit, setHouseNumberToEdit] = useState('');
	// const [apartmentsNumberToEdit, setApartmentsNumberToEdit] = useState('');
	// const [postalCodeToEdit, setPostalCodeToEdit] = useState('');
	// const [townToEdit, setTownToEdit] = useState('');
	// const [phoneNumberToEdit, setPhoneNumberToEdit] = useState('');
	// const [dateOfBirthToEdit, setDateOfBirthToEdit] = useState('');
	const selectedContact = contacts.find((obj) => obj.id === idToEdit);
	const [selectedItemId, setSelectedItemId] = useState('');
	const [show, setShow] = useState(false);


	const itemToEditPost = {
		dateOfBirth:
			dateOfBirthToEdit === null
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

	const onSubmitEdit = () => {
		const editUrl = baseUrl + '/' + idToEdit;
		axios
			.put(editUrl, itemToEditPost)
			.then((res) => {
				console.log(res);
				fetch();
				setIdToEdit('');
				setRowActive(false);
				setShow(true);
			})
			.catch((err) => console.log(err));
	};

	const cancelHandler = () => {
        fetch()
		setRowActive(false);
		// setIdToEdit('');
        // fetch()

		
	};



	return (
		<StyledWrapper>
			{show && (
                <AlertSubmit setShow={setShow}/>
			)}

			<Table bordered responsive striped hover>
                <TableHeadFields/>

                <TableBody
                fetch={fetch}
                />

				{/* <tbody>
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
				</tbody> */}
			</Table>
            <StyledTableButtons
            cancelHandler={cancelHandler}
            onSubmitEdit={onSubmitEdit}

            />

		</StyledWrapper>
	);
};

export default ContactsList;
