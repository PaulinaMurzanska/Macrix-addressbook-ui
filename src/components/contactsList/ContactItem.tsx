import React,{useState,useContext, SetStateAction} from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/AppTheme';
import moment from 'moment';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { ContactCtx } from '../../context/ContactContex';
import axios from 'axios';
import { Button, Modal} from 'react-bootstrap';
import FullName from './contactListItemFields/FullName';
import Address from './contactListItemFields/Address';

// interface Props {
//     id:string;
// }



const StyledInfo = styled.div`
	font-size: 2rem;
	color: ${theme.fontColorDarker};
	margin: 0 5px;
`;

const StyledNameWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`;
const StyledAddressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const StyledBodyRow= styled.div`
width: 100%;
display: flex;

`;
const StyledIconsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: green;
	font-size: 2rem;
	position: relative;
`;
const StyledIconsWrapperOverlay = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
z-index:2;
border:1px solid red;



`;


const StyledInput = styled.input`
border:none;
background-color: transparent;
max-width: 100%;
padding: 8px;
&:hover{
	background-color: #dee6ec;
}
&:focus{
	outline: none;
	box-shadow: 0px 0px 7px -2px #363535;
	background-color: #dee6ec;

}

`;


const StyledCol= styled.div`
min-height: 50px;
height: auto;
font-size: 1.8rem;
margin:1px;
border:1px solid #e0dbdb;
box-shadow: 0px 0px 7px -2px rgba(154, 152, 152, 1);
&:hover{
	transform: scale(1.01);
	background-color: #f8f2f2;
	cursor: pointer;
}

&:first-child{
    width:25%;
}
&:nth-child(2){
    width:25%;
}
&:nth-child(3){
    width:20%;
}
&:nth-child(4){
    width:20%;
}
&:last-child{
    width:10%;
}

`;

interface Props {
	contact:{};
	name: string;
	surname: string;
	id: string;
	street: string;
	house: string;
	apartment: string;
	postalCode: string;
	town: string;
	birth: string;
	phone: string;
	fetch:()=>void;
	setIdToEdit:React.Dispatch<SetStateAction<string>>
    
}



const ContactItem: React.FC<Props> = ({
	name,
	surname,
	street,
	house,
	apartment,
	postalCode,
	town,
	birth,
	phone,
	id,
	fetch,
	setIdToEdit,

	

}) => {

    // const dateOfBirth =parseInt(moment(Date.parse(birth)).format("YYYY"));
    // const dateNow = parseInt(moment(Date.now()).format("YYYY"));
    // const age = dateNow-dateOfBirth;
    // const phoneUnified = ("" + phone).replace(/\D/g, "");
    // const  phoneFormatted = phoneUnified.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "-");
	// const {contacts, setFirstName,firstName} =useContext(ContactCtx);
	// const[selectedID, setSelectedId] = useState("");

	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


	// const preDelete = (e:any)=>{
	// 	console.log("pre delete cklicked");
		
	// 	handleShow()
	// 	setSelectedId(e.target.id)
	// 	console.log("e.target.id",e.target.id);

	
		
	// };
	// const itemToDelete = contacts.find(contact=>contact.id === selectedID);


	// const handleDelete= async()=>{
	// 	const itemToDelete = contacts.find(contact=>contact.id === selectedID);
	// 	const requestUrl =
	// 	'https://us-central1-addressbook-api-329f0.cloudfunctions.net/contact';

	// 	const deleteUrl = requestUrl+"/"+selectedID;


	// 	await axios.delete(deleteUrl, {params:itemToDelete})
	// 	.then(res=>{
	// 		console.log("response delete", res);
	// 		fetch()
	

		
	// 	})
	// 	.catch(err=>{
	// 		console.log(err)
	// 	})

		
	// 	handleClose()
		
	// }





// const [inputNameValue, setInputNameValue]=useState(name);
// const [nameCopy, setNameCopy]=useState(name);

// const [inputSurnameValue, setInputSurnameValue]=useState(surname);
// const [surnameCopy, setsurnameCopy]=useState(surname);

// const changeHandler=(e:any)=>{
// 	setInputNameValue(e.target.value)
// 	setNameCopy(e.target.value)
// 	setFirstName(e.target.name)
// }
// const focusHandler =(e:any)=>{
// setIdToEdit(e.target.id)
// }


	

	return (


<div>item to delete if will not be needed</div>


	);
};

export default ContactItem
