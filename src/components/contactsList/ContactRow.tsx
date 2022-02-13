import React, { useContext, useState,useMemo } from 'react';
import { ContactCtx } from '../../context/ContactContex';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import DeleteModal from '../modals/DeleteModal';
import styled from 'styled-components';
import { StyledInput } from '../atoms/StyledInput';
import DatePicker from 'react-datepicker';
import { Label } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { FaEdit } from 'react-icons/fa';
import { EditContactsCtx } from '../../context/EditContext';

const StyledButtonsWrapper = styled.div`
	width: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const StyledSpan = styled.span`
	color: navy;
	font-size: 1.2rem;
`;
const IconWrapper = styled.div`
	width: 20px;
	height: 20px;
	position: relative;
`;
const IconClickableOverlay = styled.div`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	cursor: pointer;
`;
const StyledDateEditWrapper = styled.div`
	width: 100px;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	padding: 0 15px;
`;

const StyledLabel = styled(Label)`
	font-size: 1.2rem;
	padding: 0 15px;
	color: 'green';
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
	selectedItemId: string;
	fetch: () => void;
	setFirstNameToEdit: React.Dispatch<React.SetStateAction<string>>;
	setLastNameToEdit: React.Dispatch<React.SetStateAction<string>>;
	setSelectedItemId: React.Dispatch<React.SetStateAction<string>>;
	setStreetNameToEdit: React.Dispatch<React.SetStateAction<string>>;
	setHouseNumberToEdit: React.Dispatch<React.SetStateAction<string>>;
	setApartmentsNumberToEdit: React.Dispatch<React.SetStateAction<string>>;
	setPostalCodeToEdit: React.Dispatch<React.SetStateAction<string>>;
	setTownToEdit: React.Dispatch<React.SetStateAction<string>>;
	setPhoneNumberToEdit: React.Dispatch<React.SetStateAction<string>>;
	setDateOfBirthToEdit: React.Dispatch<React.SetStateAction<string>>;
}

const ContactRow: React.FC<Props> =({
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
	// setFirstNameToEdit,
	// setLastNameToEdit,
	// setStreetNameToEdit,
	// setHouseNumberToEdit,
	// setApartmentsNumberToEdit,
	// setPostalCodeToEdit,
	// setTownToEdit,
	// setPhoneNumberToEdit,
	// setDateOfBirthToEdit,
}) => {
	// ------CONTEXT------//

	const { rowActive, setRowActive, contacts, setIdToEdit, idToEdit } =
		useContext(ContactCtx);

	const {setFirstNameToEdit,
		setLastNameToEdit,
		setStreetNameToEdit,
		setHouseNumberToEdit,
		setApartmentsNumberToEdit,
		setPostalCodeToEdit,
		setTownToEdit,
		setPhoneNumberToEdit,
		setDateOfBirthToEdit
	}=useContext(EditContactsCtx);	

	// ------ DATA FROM MAP MODIFIED ----//

	const dateOfBirth = parseInt(moment(birth).format('YYYY'));
	const dateNow = parseInt(moment(Date.now()).format('YYYY'));
	const dateOfBirthFormatted = moment(birth).format('MMM Do YY');
	const age = dateNow - dateOfBirth;
	const phoneUnified = ('' + phone).replace(/\D/g, '');
	const phoneFormatted = phoneUnified
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, '-');

	const selectedItem = contacts.find((obj) => obj.id === idToEdit);


	// ---- STATE DECLARATION ----//

	const [startDate, setStartDate] = useState(new Date()); //DATEPICKER DEFAULT
	const [inputNameValue, setInputNameValue] = useState(
		selectedItem === undefined ? name : selectedItem?.firstName,
	);
	const [inputLastnameValue, setInputLastnameValue] = useState(
		selectedItem === undefined ? surname : selectedItem.lastName,
	);
	const [inputStreetValue, setInputStreetValue] = useState(
		selectedItem === undefined ? street : selectedItem.streetName,
	);
	const [inputApartmentValue, setInputApartmentValue] = useState(
		selectedItem === undefined ? apartment : selectedItem.apartmentsNumber,
	);
	const [inputHouseValue, setInputHouseValue] = useState(
		selectedItem === undefined ? house : selectedItem.houseNumber,
	);
	const [inputPostcodeValue, setInputPostcodeValue] = useState(
		selectedItem === undefined ? postalCode : selectedItem.postalCode,
	);
	const [inputTownValue, setInputTownValue] = useState(
		selectedItem === undefined ? town : selectedItem.town,
	);
	const [inputPhoneValue, setInputPhoneValue] = useState(
		selectedItem === undefined ? phoneFormatted :selectedItem.phoneNumber,
	);
	const [dateChangeBtnTargetId, setdDateChangeBtnTargetId] = useState(null);

	// ---- row details ON-CHANGE HANDLERS --- //

	const onNameChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputNameValue(e.target.value);
			setFirstNameToEdit(e.target.value);
		} else {
			return setInputNameValue(name);
		}
	};
	const onLastnameChangeHandler = (e: any) => {
		console.log("targetID",e.target.id);
		console.log("targetID",e.target.id);

		if (idToEdit === e.target.id) {
			setInputLastnameValue(e.target.value);
			setLastNameToEdit(e.target.value);
		} else {
			return setInputLastnameValue(surname);
		}
	};
	const onStreetnameChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputStreetValue(e.target.value);
			setStreetNameToEdit(e.target.value);
		} else {
			return setInputStreetValue(street);
		}
	};
	const onApartmentChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputApartmentValue(e.target.value);
			setApartmentsNumberToEdit(e.target.value);
		} else {
			return setInputApartmentValue(apartment);
		}
	};
	const onHouseChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputHouseValue(e.target.value);
			setHouseNumberToEdit(e.target.value);
		} else {
			return setInputHouseValue(house);
		}
	};
	const onPostcodeChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputPostcodeValue(e.target.value);
			setPostalCodeToEdit(e.target.value);
		} else {
			return setInputPostcodeValue(postalCode);
		}
	};
	const onTownChangeHandler = (e: any) => {
		if (idToEdit === e.target.id) {
			setInputTownValue(e.target.value);
			setTownToEdit(e.target.value);
		} else {
			return setInputTownValue(town);
		}
	};
	const onPhoneChangeHandler = (e: any) => {
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
	const setCustomDateOnChange = (date: any) => {
		setStartDate(date);
		setDateOfBirthToEdit(date);
	};

	// ----   ON-CLICK handlers ---//

	const onClickEditRowHandler = (e: any) => {
		setRowActive(true);
		setIdToEdit(e.target.id);
	};

	const onClickChangeDateButtonHandler = (e: any) => {
		const targetId = e.target.id;
		setdDateChangeBtnTargetId(targetId);
	};

	// ---- CONDITIONAL RENDERING DATA ---//

	const firstConditionToMakeCalendarVisible = dateChangeBtnTargetId === id;
	const secondConditionToMakeCalendarVisible =
		dateChangeBtnTargetId === idToEdit;
	const isCalendarVisible =
		firstConditionToMakeCalendarVisible &&
		rowActive &&
		secondConditionToMakeCalendarVisible;




	return (
		<tr>
			<td>
				<StyledInput
					type='text'
					width='140px'
					value={inputNameValue}
					id={id}
					onChange={onNameChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='140px'
					value={inputLastnameValue}
					id={id}
					onChange={onLastnameChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='100px'
					value={inputStreetValue}
					id={id}
					onChange={onStreetnameChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='40px'
					value={inputApartmentValue}
					id={id}
					onChange={onApartmentChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='40px'
					value={inputHouseValue}
					id={id}
					onChange={onHouseChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='70px'
					value={inputPostcodeValue}
					id={id}
					onChange={onPostcodeChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='90px'
					value={inputTownValue}
					id={id}
					onChange={onTownChangeHandler}
				/>
			</td>
			<td>
				<StyledInput
					type='text'
					width='150px'
					value={inputPhoneValue}
					id={id}
					onChange={onPhoneChangeHandler}
				/>
			</td>
			<td>
				<StyledDateEditWrapper>
					<StyledSpan>
						{' '}
						Date of birth: {dateOfBirthFormatted}{' '}
					</StyledSpan>

					{idToEdit === id && (
						<IconWrapper>
							<FaEdit
								style={{
									color: 'navy',
									fontSize: '1.8rem',
									marginLeft: '10px',
								}}
							/>
							<IconClickableOverlay
								id={id}
								onClick={onClickChangeDateButtonHandler}
							/>
						</IconWrapper>
					)}
				</StyledDateEditWrapper>
				{isCalendarVisible && (
<>
						<StyledLabel for='birth'>
							update date of birth
						</StyledLabel>
						<DatePicker
							selected={startDate}
							onChange={setCustomDateOnChange}
							showYearDropdown
							dateFormatCalendar='MMMM'
							yearDropdownItemNumber={40}
							scrollableYearDropdown
							dateFormat='dd-MMM-yyyy'
						/>
					</>
				)}
			</td>
			<td>{age}</td>
			<td>
				<StyledButtonsWrapper>
					<>
						<Button
							variant='warning'
							id={id}
							onClick={onClickEditRowHandler}
							style={{ margin: '5px', width: '100%' }}
						>
							Edit record
						</Button>
					</>
					<DeleteModal id={id} fetch={fetch} />
				</StyledButtonsWrapper>
			</td>
		</tr>
	);
};

export default ContactRow;
