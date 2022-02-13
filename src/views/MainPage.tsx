import axios from 'axios';
import React, { useEffect, useContext} from 'react';
import ContactsList from '../components/contactsList/table/ContactsList';
import { StyledAppBodyContainer } from '../components/containers/StyledAppBodyContainer';
import { ContactCtx } from '../context/ContactContex';
import ModalCreate from '../components/modals/ModalCreate';
import { baseUrl } from '../constants/Endpoints';
import styled from 'styled-components';

const StyledModalWrapper = styled.div`
	text-align: right;
	
`;

const MainPage: React.FC = () => {
	const { setContacts } = useContext(ContactCtx);
	const fetchContacts = () => {
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
			<h2>Address book App - add, delete or edit your contacts</h2>
			<ContactsList fetch={fetchContacts} />
		</StyledAppBodyContainer>
	);
};

export default MainPage;
