import React from 'react';
import { useStateValue } from '../../State/State';

import TopMenu from '../../Components/TopMenu/TopMenu';
import MainPage from './MainPage';
import LoginPage from './LoginPage';



function Home() {
    const [{ user, theme }, dispatch] = useStateValue();

    return (
        <>


            <div className="content-video" style={ {color: theme.primary, background: theme.background } }>
            <TopMenu/>
            <br></br>   

                {/* <button id="myBtn" onClick={handleClick()}>Pause</button> */}
                <div className=" Home-Login-Menu">
                <br/>
                { user.providerId ? <MainPage/> : <LoginPage/> } 
                </div>
            </div> 
            <div className="container-blocks">

            
    
            </div>
        </>
    )
}

export default Home;