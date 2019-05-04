import React, { useState, useEffect } from 'react'
import LoginLogic from './LoginLogic';
import GeneralStyleButton from '../../Theme/GeneralStyleButton';
import Avatar from '../Avatar/Avatar';
import { useStateValue } from '../../State/State';
import LogOut from './LogOut';
// import AddResearchCard from '../AddResearchCard/AddResearchCard'
import SuggestCard from '../AddResearchCard/SuggestCard'
import { Button, Modal, Icon, Divider, Card } from 'semantic-ui-react';



export default function UserMenu() {

  const [open, setOpen] = useState(false);

  const [{ user, theme }, dispatch] = useStateValue();


  return (
    <Modal dimmer="blurring" trigger={
      <Button className="menu-button" onClick={() => setOpen(true)}>
        <Avatar />
      </Button>}
      basic size='fullscreen'
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        
          <Button icon floated="right" onClick={() => setOpen(false)}>
            <Icon name="close" /> </Button>
          <Divider />
          <h2>
            {user.providerId ? user.displayName : "Login"}
          </h2>
          {user.providerId ? <LogOut /> : <LoginLogic />}

          <Divider inverted />
          <p> <a href="https://twitter.com/warteamx" target="_blank" rel="noopener noreferrer"> < Icon link name="twitter" color="teal">
          </Icon> * You can also twitter your suggestions </a>  </p>
          <SuggestCard />
          <Divider />
          <p> Choose Style </p>
          <GeneralStyleButton />
          <br></br>
          <Divider />
          <p> <a href="https://github.com/martinrebo/tinkar" target="_blank" rel="noopener noreferrer">
            <Icon link size="large" color="teal" name="github" /> Github repository </a>  </p>
          <br />


      </Modal.Content>

    </Modal>
  )
};

