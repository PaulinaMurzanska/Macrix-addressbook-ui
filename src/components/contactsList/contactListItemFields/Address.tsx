import React, { useState, useContext } from 'react';
import { ContactCtx } from '../../../context/ContactContex';
import styled from 'styled-components';
import { StyledCol } from '../../atoms/StyledColumn';
import { StyledInput } from '../../atoms/StyledInput';

const StyledAddressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
interface Props {
    id:string,
    street:string,
    house:string,
    apartment:string,
     postalCode :string,
}

const Address:React.FC <Props> = ({ 
    id, 
    street, 
    house, 
    apartment, 
    postalCode 
}) => {
	const {setStreetName, setIdToEdit, setApartmentsNumber, setHouseNumber,setPostalCode } = useContext(ContactCtx);

	const [inputSteetValue, setInputStreetValue] = useState(street);
	const [inputHouseValue, setInputHouseValue] = useState(house);
	const [inputApartmentValue, setInputApartmentValue] = useState(apartment);
	const [inputPostalCodeValue, setInputPostalCodeValue] = useState(postalCode);


	return (
		<StyledCol>
			<StyledAddressWrapper>
				<StyledInput
					id={id}
					value={inputSteetValue}
					onChange={(e: any) => setInputStreetValue(e.target.value)}
					onFocus={(e: any) => setIdToEdit(e.target.id)}
					onBlur={(e: any) => setStreetName(e.target.value)}
				/>
                <StyledInput
					id={id}
					value={inputHouseValue}
					onChange={(e: any) => setInputHouseValue(e.target.value)}
					onFocus={(e: any) => setIdToEdit(e.target.id)}
					onBlur={(e: any) => setHouseNumber(e.target.value)}
				/>
                <StyledInput
					id={id}
					value={inputApartmentValue}
					onChange={(e: any) => setInputApartmentValue(e.target.value)}
					onFocus={(e: any) => setIdToEdit(e.target.id)}
					onBlur={(e: any) => setApartmentsNumber(e.target.value)}
				/>
                <StyledInput
					id={id}
					value={inputPostalCodeValue}
					onChange={(e: any) => setInputPostalCodeValue(e.target.value)}
					onFocus={(e: any) => setIdToEdit(e.target.id)}
					onBlur={(e: any) => setPostalCode(e.target.value)}
				/>  
			</StyledAddressWrapper>
		</StyledCol>
	);
};

export default Address;
