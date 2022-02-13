import React from 'react';
import {StyledButtonsWrapper} from "../../../styledComponents/StyledContactRowComponents"
import { Button } from 'react-bootstrap';
import DeleteModal from '../../../modals/DeleteModal';

interface Props {
id:string;
onClickEditRowHandler:(e:any)=>void;
fetch:()=>void;
}

const ActionButtonsField:React.FC<Props> = ({id,onClickEditRowHandler, fetch}) => {
    return (
        <td>
        <StyledButtonsWrapper>
            <>
                <Button
                    variant='warning'
                    id={id}
                    onClick={onClickEditRowHandler}
                    style={{ margin: '5px', width: '100%' }}
                >
                    Edit record
                </Button>
            </>
            <DeleteModal id={id} fetch={fetch} />
        </StyledButtonsWrapper>
    </td>
    )
}

export default ActionButtonsField

