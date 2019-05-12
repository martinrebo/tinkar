import React from 'react'
import SuggestCardForm from '../CardForm/CardFormSuggest';
import { Modal, Button, Icon } from 'semantic-ui-react';

export default function AddResearchCard() {


  return (

    <Modal trigger={<Button>Suggest Card</Button>} closeIcon>
      <Modal.Content>

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

