import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import {StyledButtonsWrapper} from "./StyledTableComponnets"
import { ContactCtx } from '../../context/ContactContex';

interface Props {
    cancelHandler:()=>void;
    onSubmitEdit:()=>void;
}

const StyledTableButtons:React.FC <Props> = ({cancelHandler,onSubmitEdit}) => {
    
    const {rowActive} = useContext(ContactCtx);
    
    return (
        <StyledButtonsWrapper>
        <Button
            onClick={cancelHandler}
            variant='danger'
            className={rowActive ? '' : 'disabled'}
            style={{ width: '50%', fontSize: '1.5rem', margin: '10px' }}
        >
            cancel
        </Button>
        <Button
            onClick={onSubmitEdit}
            variant='success'
            className={rowActive ? '' : 'disabled'}
            style={{ width: '50%', fontSize: '1.5rem', margin: '10px' }}
        >
            submit
        </Button>
    </StyledButtonsWrapper>
    )
}

export default StyledTableButtons
