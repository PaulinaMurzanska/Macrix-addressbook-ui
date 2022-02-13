import React, { useState } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from '../../constants/Endpoints';
import FormGroupComponent from '../contactsList/contactsForm/FormGroup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Fetch {
	fetch: () => {};
}

const ModalCreate: React.FC<Fetch> = ({ fetch }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [firstName, setName] = useState('');
	const [lastName, setSurname] = useState('');
	const [streetName, setStreet] = useState('');
	const [houseNumber, setBuilding] = useState('');
	const [apartmentsNumber, setApt] = useState('');
	const [phoneNumber, setPhone] = useState('');
	const [postalCode, setPostCode] = useState('');
	const [town, setTown] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	const newContact = {
		dateOfBirth: startDate,
		firstName,
		lastName,
		streetName,
		houseNumber,
		apartmentsNumber,
		postalCode,
		town,
		phoneNumber,
	};

	const handleSubmit = async () => {
		const data = newContact;
		await axios
			.post(baseUrl, data)
			.then(() => {
				fetch();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setName('');
				setSurname('');
				setStreet('');
				setBuilding('');
				setApt('');
				setPostCode('');
				setPhone('');
				setTown('');
				setStartDate(new Date());
			});
		handleClose();
	};

	return (
		<>
			<Button
				variant='success'
				onClick={handleShow}
				style={{ width: '150px', height: '40px', fontSize: '1.5rem' }}
			>
				Add new contact
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Create new contact to your contacts list
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<FormGroupComponent
							name='first-name'
							placeholder='first name'
							value={firstName}
							onChange={(e: any) => setName(e.target.value)}
							onBlur={(e: any) => setName(e.target.value)}
							label='First Name'
						/>
						<FormGroupComponent
							name='lastname'
							placeholder='surname'
							value={lastName}
							onChange={(e: any) => setSurname(e.target.value)}
							onBlur={(e: any) => setSurname(e.target.value)}
							label='Last Name'
						/>
						<FormGroupComponent
							name='street'
							placeholder='street name'
							value={streetName}
							onChange={(e: any) => setStreet(e.target.value)}
							onBlur={(e: any) => setStreet(e.target.value)}
							label='Street'
						/>
						<FormGroupComponent
							name='building'
							label='Building number'
							placeholder='building number'
							value={houseNumber}
							onChange={(e: any) => setBuilding(e.target.value)}
							onBlur={(e: any) => setBuilding(e.target.value)}
						/>
						<FormGroupComponent
							name='apt'
							label='Apartment number'
							placeholder='apartment number'
							value={apartmentsNumber}
							onChange={(e: any) => setApt(e.target.value)}
							onBlur={(e: any) => setApt(e.target.value)}
						/>
						<FormGroupComponent
							name='post'
							label='Post code'
							placeholder='post code'
							value={postalCode}
							onChange={(e: any) => setPostCode(e.target.value)}
							onBlur={(e: any) => setPostCode(e.target.value)}
						/>
						<FormGroupComponent
							name='town'
							label='Town'
							placeholder='town'
							value={town}
							onChange={(e: any) => setTown(e.target.value)}
							onBlur={(e: any) => setTown(e.target.value)}
						/>
						<FormGroupComponent
							name='phone'
							label='Phone'
							placeholder='numbers only'
							value={phoneNumber}
							onChange={(e: any) => setPhone(e.target.value)}
							onBlur={(e: any) => setPhone(e.target.value)}
						/>

						<FormGroup>
							<Label for='birth'>Date of birth</Label>

							<DatePicker
								selected={startDate}
								onChange={(date: any) => setStartDate(date)}
								peekNextMonth
								showMonthDropdown
								showYearDropdown
								dropdownMode='select'
							/>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalCreate;
