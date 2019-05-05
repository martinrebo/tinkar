import React, {useState} from 'react';
import {Modal, Button} from 'semantic-ui-react';
import CardFormAdd from '../CardForm/CardFormAdd';

export default function AddResearchCard() { 

  const [open, setOpen] = useState(false)


return ( 
  <Modal trigger={<Button onClick={()=>setOpen(true)}>Add Research Card</Button>} 
  basic size='small'
open={open}
onClose={ () => setOpen(false)}
  >
    <Modal.Content>
      <p>
        Add Research Card
      </p>
      <button onClick={()=>setOpen(false)}>Close x </button>
     <CardFormAdd/>
       
    </Modal.Content>

  </Modal>
  )};

