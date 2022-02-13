import React, {createContext,useState} from 'react';
import { SetStateAction } from 'react';

type ContactContextState = {
    contacts:{
        id:string,
        firstName :string,
        lastName:string,
        streetName:string,
        houseNumber:string,
        apartmentsNumber:string,
        postalCode:string,
        town:string,
        dateOfBirth:Date,
        phoneNumber:string,

    }[],
    firstName:string;
    idToEdit:string;
    lastName:string;
    streetName:string;
    houseNumber:string;
    apartmentsNumber:string;
    postalCode:string;
    town:string;
    phoneNumber:string;
    dateOfBirth:Date;
    rowActive:boolean;

    setContacts: React.Dispatch<React.SetStateAction<{
        id: string;
        firstName: string;
        lastName: string;
        streetName: string;
        houseNumber: string;
        apartmentsNumber: string;
        postalCode: string;
        town: string;
        dateOfBirth: Date;
        phoneNumber: string;
  
    }[]>>,
    setFirstName:React.Dispatch<SetStateAction<string>>;
    setIdToEdit:React.Dispatch<SetStateAction<string>>;
    setLastName:React.Dispatch<SetStateAction<string>>;
    setStreetName:React.Dispatch<SetStateAction<string>>;
    setHouseNumber:React.Dispatch<SetStateAction<string>>;
    setApartmentsNumber:React.Dispatch<SetStateAction<string>>;
    setPostalCode:React.Dispatch<SetStateAction<string>>;
    setTown:React.Dispatch<SetStateAction<string>>;
    setPhoneNumber:React.Dispatch<SetStateAction<string>>;
    setDateOfBirth:React.Dispatch<SetStateAction<Date>>;
    setRowActive:React.Dispatch<React.SetStateAction<boolean>>
}


const contextValues: ContactContextState = {
    contacts:[],
    firstName:"",
    idToEdit:"",
    lastName:"",
    streetName:"",
    houseNumber:"",
    apartmentsNumber:"",
    postalCode:"",
    town:"",
    phoneNumber:"",
    dateOfBirth:new Date(),
    rowActive:false,
    setContacts:()=>{},
    setFirstName:()=>{},
    setIdToEdit:()=>{},
    setLastName:()=>{},
    setStreetName:()=>{},
    setHouseNumber:()=>{},
    setApartmentsNumber:()=>{},
    setPostalCode:()=>{},
    setTown:()=>{},
    setPhoneNumber:()=>{},
    setDateOfBirth:()=>{},
    setRowActive:()=>{}

};

export const ContactCtx =
	createContext<ContactContextState>(contextValues);

const ContactContext:React.FC = ({ children }) => {
    const [contacts, setContacts]=useState(contextValues.contacts);
    const [firstName, setFirstName]=useState(contextValues.firstName);
    const [lastName, setLastName]=useState(contextValues.lastName);
    const [streetName, setStreetName]=useState(contextValues.streetName);
    const [houseNumber, setHouseNumber]=useState(contextValues.houseNumber);
    const [apartmentsNumber, setApartmentsNumber]=useState(contextValues.apartmentsNumber);
    const [postalCode, setPostalCode]=useState(contextValues.postalCode);
    const [town, setTown]=useState(contextValues.town);
    const [phoneNumber, setPhoneNumber]=useState(contextValues.phoneNumber);
    const [dateOfBirth, setDateOfBirth]=useState(contextValues.dateOfBirth);
    const [idToEdit, setIdToEdit]=useState(contextValues.idToEdit);
    const [rowActive, setRowActive]= useState(contextValues.rowActive)
console.log("row active", rowActive);

    console.log(contacts);

	return (
		<ContactCtx.Provider value={{
            contacts,
            setContacts,
            firstName,
            idToEdit,
            lastName,
            streetName,
            houseNumber,
            apartmentsNumber,
            postalCode,
            town,
            phoneNumber,
            dateOfBirth,
            rowActive,
            setFirstName,
            setIdToEdit,
            setLastName,
            setStreetName,
            setHouseNumber,
            setApartmentsNumber,
            setPostalCode,
            setTown,
            setPhoneNumber,
            setDateOfBirth, 
            setRowActive,
            
        }}>
			{children}
		</ContactCtx.Provider>
	);
};
export default ContactContext;
