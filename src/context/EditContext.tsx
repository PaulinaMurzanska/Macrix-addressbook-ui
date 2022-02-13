import React, {createContext,useState} from 'react';
import { SetStateAction } from 'react';



type EditContextState = {
    firstNameToEdit:string;
    lastNameToEdit:string;
    streetNameToEdit:string;
    houseNumberToEdit:string;
    apartmentsNumberToEdit:string;
    postalCodeToEdit:string;
    townToEdit:string;
    phoneNumberToEdit:string;
    dateOfBirthToEdit:Date;
    setFirstNameToEdit:React.Dispatch<SetStateAction<string>>;
    setLastNameToEdit:React.Dispatch<SetStateAction<string>>;
    setStreetNameToEdit:React.Dispatch<SetStateAction<string>>;
    setHouseNumberToEdit:React.Dispatch<SetStateAction<string>>;
    setApartmentsNumberToEdit:React.Dispatch<SetStateAction<string>>;
    setPostalCodeToEdit:React.Dispatch<SetStateAction<string>>;
    setTownToEdit:React.Dispatch<SetStateAction<string>>;
    setPhoneNumberToEdit:React.Dispatch<SetStateAction<string>>;
    setDateOfBirthToEdit:React.Dispatch<SetStateAction<Date>>;
}

const editContextValues: EditContextState = {
    firstNameToEdit:"",
    lastNameToEdit:"",
    streetNameToEdit:"",
    houseNumberToEdit:"",
    apartmentsNumberToEdit:"",
    postalCodeToEdit:"",
    townToEdit:"",
    phoneNumberToEdit:"",
    dateOfBirthToEdit:new Date(),
    setFirstNameToEdit:()=>{},
    setLastNameToEdit:()=>{},
    setStreetNameToEdit:()=>{},
    setHouseNumberToEdit:()=>{},
    setApartmentsNumberToEdit:()=>{},
    setPostalCodeToEdit:()=>{},
    setTownToEdit:()=>{},
    setPhoneNumberToEdit:()=>{},
    setDateOfBirthToEdit:()=>{},
    
};

export const EditContactsCtx = createContext<EditContextState>(editContextValues);

const EditContext:React.FC =({children})=>{
    const [firstNameToEdit, setFirstNameToEdit] = useState(editContextValues.firstNameToEdit);
	const [lastNameToEdit, setLastNameToEdit] = useState(editContextValues.lastNameToEdit);
	const [streetNameToEdit, setStreetNameToEdit] = useState(editContextValues.streetNameToEdit);
	const [houseNumberToEdit, setHouseNumberToEdit] = useState(editContextValues.houseNumberToEdit);
	const [apartmentsNumberToEdit, setApartmentsNumberToEdit] =  useState(editContextValues.apartmentsNumberToEdit);
	const [postalCodeToEdit, setPostalCodeToEdit] = useState(editContextValues.postalCodeToEdit);
	const [townToEdit, setTownToEdit] = useState(editContextValues.townToEdit);
	const [phoneNumberToEdit, setPhoneNumberToEdit] = useState(editContextValues.phoneNumberToEdit);
	const [dateOfBirthToEdit, setDateOfBirthToEdit] = useState(editContextValues.dateOfBirthToEdit);
    
    
    const values = {
        firstNameToEdit,
        lastNameToEdit,
        streetNameToEdit,
        houseNumberToEdit,
        apartmentsNumberToEdit,
        postalCodeToEdit,
        townToEdit,
        phoneNumberToEdit,
        dateOfBirthToEdit,
        setFirstNameToEdit,
        setLastNameToEdit,
        setStreetNameToEdit,
        setHouseNumberToEdit,
        setApartmentsNumberToEdit,
        setPostalCodeToEdit,
        setTownToEdit,
        setPhoneNumberToEdit,
        setDateOfBirthToEdit
    
    
    }
    
    return(
        <EditContactsCtx.Provider value={values}>
            {children}
        </EditContactsCtx.Provider>
    )
};
export default EditContext;