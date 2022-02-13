import React, { useContext, useState } from 'react';
import { ContactCtx } from '../../../context/ContactContex';
import moment from 'moment';
import { EditContactsCtx } from '../../../context/EditContext';
import FirstNameField from './TableRowDetailsFields/FirstNameField';
import LastNameField from './TableRowDetailsFields/LastNameField';
import StreetNameField from './TableRowDetailsFields/StreetNameField';
import ApartmentField from './TableRowDetailsFields/ApartmentField';
import HouseField from './TableRowDetailsFields/HouseField';
import PostCodeField from './TableRowDetailsFields/PostCodeField';
import TownField from './TableRowDetailsFields/TownField';
import PhoneField from './TableRowDetailsFields/PhoneField';
import DateOfBirthField from './TableRowDetailsFields/DateOfBirthField';
import ActionButtonsField from './TableRowDetailsFields/ActionButtonsField';
import styled from 'styled-components';

const StyledRow = styled.tr`
	background-color: none;
	&.active {
		background-color: #cffacfae;
	}
`;

interface Props {
	name: string;
	surname: string;
	id: string;
	street: string;
	house: string;
	apartment: string;
	postalCode: string;
	town: string;
	birth: Date;
	phone: string;
	fetch: () => void;
}

const ContactRow: React.FC<Props> = ({
	name,
	surname,
	street,
	house,
	apartment,
	postalCode,
	town,
	id,
	phone,
	birth,
	fetch,
}) => {
	const { setRowActive, contacts, setIdToEdit, idToEdit, rowActive } =
		useContext(ContactCtx);

	const { setDateOfBirthToEdit } = useContext(EditContactsCtx);

	const dateOfBirth = parseInt(moment(birth).format('YYYY'));
	const dateNow = parseInt(moment(Date.now()).format('YYYY'));
	const dateOfBirthFormatted = moment(birth).format('MMM Do YY');
	const age = dateNow - dateOfBirth;
	const phoneUnified = ('' + phone).replace(/\D/g, '');
	const phoneFormatted = phoneUnified
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, '-');

	const selectedItem = contacts.find((obj) => obj.id === idToEdit);

	const [startDate, setStartDate] = useState(new Date()); //DATEPICKER DEFAULT
	const [dateChangeBtnTargetId, setdDateChangeBtnTargetId] = useState(null);

	const setCustomDateOnChange = (date: any) => {
		setStartDate(date);
		setDateOfBirthToEdit(date);
	};

	const onClickEditRowHandler = (e: any) => {
		setRowActive(true);
		setIdToEdit(e.target.id);
	};

	const onClickChangeDateButtonHandler = (e: any) => {
		const targetId = e.target.id;
		setdDateChangeBtnTargetId(targetId);
	};

	const isRowActive = idToEdit === id ? true : false;

	return (
		<StyledRow className={isRowActive ? 'active' : ''}>
			<FirstNameField id={id} selectedItem={selectedItem} name={name} />
			<LastNameField
				id={id}
				selectedItem={selectedItem}
				surname={surname}
			/>
			<StreetNameField
				id={id}
				selectedItem={selectedItem}
				street={street}
			/>
			<HouseField id={id} selectedItem={selectedItem} house={house} />

			<ApartmentField
				id={id}
				selectedItem={selectedItem}
				apartment={apartment}
			/>
			<PostCodeField
				id={id}
				selectedItem={selectedItem}
				postalCode={postalCode}
			/>
			<TownField id={id} selectedItem={selectedItem} town={town} />
			<PhoneField
				id={id}
				selectedItem={selectedItem}
				phoneFormatted={phoneFormatted}
				phone={phone}
			/>
			<DateOfBirthField
				id={id}
				dateOfBirthFormatted={dateOfBirthFormatted}
				setCustomDateOnChange={setCustomDateOnChange}
				startDate={startDate}
				dateChangeBtnTargetId={dateChangeBtnTargetId}
				onClickChangeDateButtonHandler={onClickChangeDateButtonHandler}
			/>
			<td>{age}</td>
			<ActionButtonsField
				id={id}
				onClickEditRowHandler={onClickEditRowHandler}
				fetch={fetch}
			/>
		</StyledRow>
	);
};

export default ContactRow;
