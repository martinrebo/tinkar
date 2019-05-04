import React, { useState } from 'react'
import SuggestCardForm from '../CardForm/CardFormSuggest';
import { Modal, Button, Icon } from 'semantic-ui-react';

export default function AddResearchCard() {

  const [open, setOpen] = useState(false)


  return (
    <Modal trigger={<Button onClick={() => setOpen(true)}>Suggest Card</Button>}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <Modal.Header>
          <Button icon floated="right" onClick={() => setOpen(false)} >
            <Icon name="close" />
          </Button>
        </Modal.Header>
        <h5>
          Suggest ES Card
      </h5>

        <SuggestCardForm />

        <p> <a href="https://twitter.com/warteamx" target="_blank" rel="noopener noreferrer"> < Icon link name="twitter" color="teal">
        </Icon> * You can also twitter your suggestions </a>  </p>
      </Modal.Content>

    </Modal>
  )
};

