import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ContactCtx } from '../../context/ContactContex';
import axios from 'axios';
import { baseUrl } from '../../constants//Endpoints';

interface Props {
	id: string;
	fetch: () => void;
}

const DeleteModal: React.FC<Props> = ({ id, fetch }) => {
	const { contacts } = useContext(ContactCtx);

	const [selectedID, setSelectedId] = useState('');
	const [show, setShow] = useState(false);
	const itemToDelete = contacts.find((contact) => contact.id === selectedID);
	const nameToDelete = itemToDelete?.firstName;
	const lastNameToDelete = itemToDelete?.lastName;

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const preDelete = (e: any) => {
		handleShow();
		setSelectedId(e.target.id);
	};

	const handleDelete = async () => {
		const itemToDelete = contacts.find(
			(contact) => contact.id === selectedID,
		);
		const deleteUrl = baseUrl + '/' + selectedID;

		await axios
			.delete(deleteUrl, { params: itemToDelete })
			.then((res) => {
				console.log(
					res,
				);
				fetch();
			})
			.catch((err) => {
				console.log(err);
			});

		handleClose();
	};

	return (
		<>
			<Button variant='danger' id={id} onClick={preDelete}>
				Delete record
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Now you can delete contact from your address book
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete record:
					{nameToDelete} {lastNameToDelete} ?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='danger' onClick={handleClose}>
						No, don't delete
					</Button>
					<Button variant='success' onClick={handleDelete}>
						Yes, delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default DeleteModal;
