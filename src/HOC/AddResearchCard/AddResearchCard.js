import React, {useState} from 'react'
import FormResearchCard from './FormResearchCard/FormResearchCard';
import {Modal, Button} from 'semantic-ui-react';

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
      <FormResearchCard /> 
       
    </Modal.Content>

  </Modal>
  )};

