import React, {useContext} from 'react';
import { ContactCtx } from "../../../context/ContactContex"
import ContactRow from '../table/ContactRow';

interface Props {
	fetch: () => {};
    
}

const TableBody:React.FC<Props> = ({fetch}) => {

    const {contacts} = useContext(ContactCtx);
   
    return (
        <tbody>
        {contacts.map((contact) => (
            <ContactRow
                key={contact.id}
                name={contact.firstName}
                surname={contact.lastName}
                id={contact.id}
                street={contact.streetName}
                house={contact.houseNumber}
                apartment={contact.apartmentsNumber}
                postalCode={contact.postalCode}
                town={contact.town}
                birth={contact.dateOfBirth}
                phone={contact.phoneNumber}
                fetch={fetch}
        
            />
        ))}
    </tbody>
    )
}

export default TableBody
