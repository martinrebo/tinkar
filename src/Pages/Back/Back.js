import React, {useState} from 'react';
import { useStateValue } from '../../State/State';

import TopMenu from '../../Components/TopMenu/TopMenu';
import SuggestionsPage from '../Home/SuggestionsPage';
import LoginPage from '../Home/LoginPage';
import CardFormAdd from '../../Components/CardForm/CardFormAdd';
import BackCardsView from './BackCardsView';
import { Menu, Segment } from 'semantic-ui-react';



export default function Back() {
    const [{ user, theme }, dispatch] = useStateValue();

    const [menuActive, setMenuActive] = useState("");

    function view() {
        switch (menuActive) {
            case "Cards":
              return ( user.uid === "3kyT6ZtqB4ca36WnkpkLDVVYqG63"  ? <BackCardsView/> : <LoginPage/>    ) 
              break;
            case "AddCards":
              return ( user.uid === "3kyT6ZtqB4ca36WnkpkLDVVYqG63"  ? <CardFormAdd/> : <LoginPage/> ) 
              break;
              case "Suggestions":
             return ( user.uid === "3kyT6ZtqB4ca36WnkpkLDVVYqG63"  ? <SuggestionsPage/> : <LoginPage/>) 
              break;
            default:
            return <LoginPage/>
    }
}


    return (
        <>


            <div className="content-video" style={ {color: theme.primary, background: theme.background } }>
            <TopMenu/>
            <br></br> 

                <div className=" Home-Login-Menu">
                 {/* {  user.uid === "3kyT6ZtqB4ca36WnkpkLDVVYqG63"  ? <SuggestionsPage/> : <LoginPage/> }  */}
<Menu>
<Menu.Item name="Cards" active={menuActive === "Cards"} onClick={ (e) => setMenuActive("Cards")}/>
<Menu.Item name="AddCards" active={menuActive === "AddCards"} onClick={ (e) =>  setMenuActive("AddCards")}/>
<Menu.Item name="Suggestions" active={menuActive === "Suggestions"} onClick={ (e) =>  setMenuActive("Suggestions")}/>
<Menu.Item name="Users" active={menuActive === "Users"} onClick={ (e) =>  setMenuActive("Cards")}/>
</Menu>
<Segment>
     {/* {  user.uid === "3kyT6ZtqB4ca36WnkpkLDVVYqG63"  ? <SuggestionsPage/> : <LoginPage/> }  */}

{view()}
     

</Segment>
                <br/>
               
                </div>


              
            </div> 
            <div className="container-blocks">

            
    
            </div>
        </>
    )
    }
