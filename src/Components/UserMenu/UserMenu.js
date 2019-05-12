import React from 'react'
import LoginLogic from './LoginLogic';
import GeneralStyleButton from '../../Theme/GeneralStyleButton';
import Avatar from '../Avatar/Avatar';
import { useStateValue } from '../../State/State';
import LogOut from './LogOut';
// import AddResearchCard from '../AddResearchCard/AddResearchCard'
import SuggestCard from '../AddResearchCard/SuggestCard'
import { Button, Modal, Icon, Divider} from 'semantic-ui-react';
import CardMenu from '../CardMenu/CardMenu';



export default function UserMenu() {


  const [{ user }, dispatch] = useStateValue();


  return (
    <Modal dimmer="blurring" basic closeIcon trigger={
      <Button className="menu-button"> <Avatar /> </Button>}
       >
      <Modal.Content>
          <Divider />
          <h2>
            {user.providerId ? user.displayName : "Login"}
          </h2>
          {user.providerId ? <LogOut /> : <LoginLogic />}

          <Divider inverted />
          <p> Suggest Cards to add: </p>
          <SuggestCard />
          <Divider />
          <p> Choose Style </p>
          <GeneralStyleButton />
          <br></br>
          <Divider />
          <CardMenu/>
          <Divider/>
          <p> Contact us: </p>
          <p> <a href="https://github.com/martinrebo/escard" target="_blank" rel="noopener noreferrer">
            <Icon link size="large" color="teal" name="github" /> Github </a>  </p>
          <p> <a href="https://twitter.com/warteamx" target="_blank" rel="noopener noreferrer"> < Icon link name="twitter" color="teal">
          </Icon> Twitter </a>  </p>
          <Divider/>
          <p> ESCard version 0.6.0 </p>


      </Modal.Content>

    </Modal>
  )
};

