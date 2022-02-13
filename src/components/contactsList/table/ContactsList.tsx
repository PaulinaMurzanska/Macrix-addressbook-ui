import React, { useContext, useState } from 'react';
import { ContactCtx } from '../../../context/ContactContex';
import axios from 'axios';
import { baseUrl } from '../../../constants/Endpoints';
import AlertSubmit from '../../styledComponents/AlertSubmit';
import TableHeadFields from './TableHeadFields';
import { StyledWrapper } from '../../styledComponents/StyledTableComponnets';
import StyledTableButtons from '../../styledComponents/StyledTableButtons';
import TableBody from './TableBody';
import { EditContactsCtx } from '../../../context/EditContext';
import { Table } from 'react-bootstrap';

interface Props {
	fetch: () => {};
}

const ContactsList: React.FC<Props> = ({ fetch }) => {
	const { contacts, idToEdit, setRowActive, setIdToEdit } =
		useContext(ContactCtx);

	const {
		firstNameToEdit,
		lastNameToEdit,
		streetNameToEdit,
		houseNumberToEdit,
		apartmentsNumberToEdit,
		postalCodeToEdit,
		townToEdit,
		phoneNumberToEdit,
		dateOfBirthToEdit,
	} = useContext(EditContactsCtx);

	const selectedContact = contacts.find((obj) => obj.id === idToEdit);
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
		fetch();
		setRowActive(false);
		setIdToEdit('');
		fetch()
	};

	return (
		<StyledWrapper>
			{show && <AlertSubmit setShow={setShow} />}
			<Table bordered responsive striped hover>
				<TableHeadFields />
				<TableBody fetch={fetch} />
			</Table>
			<StyledTableButtons
				cancelHandler={cancelHandler}
				onSubmitEdit={onSubmitEdit}
			/>
		</StyledWrapper>
	);
};

export default ContactsList;
