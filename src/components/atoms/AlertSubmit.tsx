import React from 'react';
import Alert from 'react-bootstrap/Alert';


interface Props {
  setShow:React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertSubmit:React.FC<Props> = ({setShow}) => {
    return (
      <>
      <Alert
        variant='success'
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Changes saved!</Alert.Heading>
      </Alert>
    </>
    )
}

export default AlertSubmit
