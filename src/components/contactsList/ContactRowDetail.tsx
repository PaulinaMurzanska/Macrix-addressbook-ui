import React, {useContext, useState} from 'react';
import { ContactCtx } from '../../context/ContactContex';
import { StyledInput } from '../atoms/StyledInput';
import ContactRow from './ContactRow';

interface Props{
    width?:string;
    value?:string | any;
    id?:string;
    selectedItemId?:string;
    // setFirstNameToEdit:React.Dispatch<React.SetStateAction<string>>;
    // setLastNameToEdit:React.Dispatch<React.SetStateAction<string>>;
    onChangeHandler:(e:any)=>void;
}

const ContactRowDetail:React.FC<Props> = ({
    width, 
    selectedItemId,
    value, 
    id,
    // setFirstNameToEdit,
    // setLastNameToEdit,
    onChangeHandler
    
  
}) => {
    const {contacts } =useContext(ContactCtx);
	// const selectedItem = contacts.find(obj=>obj.id === selectedItemId);

// const [inputValue, setInputValue]= useState(selectedItem===undefined? value: selectedItem.firstName);
//     const onChangeHandler =(e:any)=>{
//         if(selectedItemId===""){
//             return setInputValue(value)
//         }else{
//             setInputValue(e.target.value)
//             setFirstNameToEdit(e.target.value)
//         }
//     }
    return (
    <td>
        <StyledInput type='text' 
         width={width} 
         value={value}
         id={id} 
         onChange={onChangeHandler}
         
         />
    </td>
    )
}

export default ContactRowDetail
