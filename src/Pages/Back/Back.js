import React from 'react';
import { useStateValue } from '../../State/State';

import TopMenu from '../../Components/TopMenu/TopMenu';
import SuggestionsPage from '../Home/SuggestionsPage';
import LoginPage from '../Home/LoginPage';
import CardFormAdd from '../../Components/CardForm/CardFormAdd';



function Suggestions() {
    const [{ user, theme }, dispatch] = useStateValue();

    return (
        <>


            <div className="content-video" style={ {color: theme.primary, background: theme.background } }>
            <TopMenu/>
            <br></br>   
                <div className=" Home-Login-Menu">

                <CardFormAdd/>
                <br/>
                {/* {  user.uid === "3kyT6ZtqB4ca36WnkpkLDVVYqG63"  ? <SuggestionsPage/> : <LoginPage/> }  */}
                </div>
            </div> 
            <div className="container-blocks">

            
    
            </div>
        </>
    )
}

export default Suggestions;