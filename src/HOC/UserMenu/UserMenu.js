import React, { useState, useEffect } from 'react'
import LoginLogic from './LoginLogic';
import GeneralStyleButton from '../../Theme/GeneralStyleButton';
import Avatar from '../Avatar/Avatar';
import { useStateValue } from '../../State/State';
import LogOut from './LogOut';
import AddResearchCard from '../AddResearchCard/AddResearchCard'
import { Button, Modal, Icon } from 'semantic-ui-react';



export default function UserMenu() {

  const [open, setOpen] = useState(false);

  const [{ user, theme }, dispatch] = useStateValue();


  return (
    <Modal trigger={
      <Button className="menu-button" onClick={() => setOpen(true)}>
        <Avatar />
      </Button>}
      basic size='small'
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <Button icon floated="right" onClick={() => setOpen(false)}>
        <Icon name="close"/> </Button>
        <h1> User Menu </h1>
        <AddResearchCard />
        <br />
        <p>
          {user.providerId ? user.displayName : "Login"}
        </p>

        {user.providerId ? <LogOut /> : <LoginLogic />}

        <br></br>
        <p> Choose Style </p>
        <GeneralStyleButton />
        <br></br>
        <p> <a href="https://github.com/martinrebo/tinkar" target="_blank" rel="noopener noreferrer">
          <Icon link size="large" color="white" name="github" /> Github repository </a>  </p>
        <br />



      </Modal.Content>

    </Modal>
  )
};

