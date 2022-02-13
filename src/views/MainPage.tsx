import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import ContactsList from '../components/contactsList/ContactsList';
import { StyledAppBodyContainer } from '../components/containers/StyledAppBodyContainer';
import { ContactCtx } from '../context/ContactContex';
import ModalCreate from '../components/contactsList/contactsForm/ModalCreate';
import { baseUrl } from '../constants/Endpoints';
import styled from 'styled-components';

const StyledModalWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 10px;
`;

const MainPage: React.FC = () => {
	const { setContacts } = useContext(ContactCtx);
	const fetchContacts = () => {
		console.log("fetch trigerred");
		return axios
			.get(baseUrl)
			.then((response) => {
				const data = response.data;
				setContacts(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {});
	};

	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<StyledAppBodyContainer>
			<StyledModalWrapper>
				<ModalCreate fetch={fetchContacts} />
			</StyledModalWrapper>
			<ContactsList fetch={fetchContacts} />
		</StyledAppBodyContainer>
	);
};

export default MainPage;
