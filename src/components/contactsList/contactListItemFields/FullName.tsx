import React,{useState, useContext} from 'react';
import styled from 'styled-components';
import { StyledInput } from '../../atoms/StyledInput';
import { StyledCol } from '../../atoms/StyledColumn';
import { ContactCtx } from '../../../context/ContactContex';

const StyledNameWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`;

interface Props {
	id: string;
	name: string;
	surname: string;
}

const FullName: React.FC<Props> = ({
name,
surname,
id
}) => {

const { setFirstName,setIdToEdit,setLastName} =useContext(ContactCtx);

const [inputNameValue, setInputNameValue]=useState(name);
const [inputSurnameValue, setInputSurnameValue]=useState(surname);


	return (
		<StyledCol>
			<StyledNameWrapper>
				<StyledInput
					id={id}
					value={inputNameValue}
					onChange={(e:any)=>setInputNameValue(e.target.value)}
					onFocus={(e:any)=>setIdToEdit(e.target.id)}
                    onBlur={(e:any)=> setFirstName(e.target.value)}
    
				/>
				<StyledInput
					id={id}
					value={inputSurnameValue}
                    onChange={(e:any)=>setInputSurnameValue(e.target.value)}
					onFocus={(e:any)=>setIdToEdit(e.target.id)}
                    onBlur={(e:any)=> setLastName(e.target.value)}
				/>
			</StyledNameWrapper>
		</StyledCol>
	);
};

export default FullName;
