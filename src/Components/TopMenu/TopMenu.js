import React from 'react';
import { useStateValue } from '../../State/State';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserMenu from '../../Components/UserMenu/UserMenu'


function TopMenu() {

    const [{ theme }, dispatch] = useStateValue();
    return (
        <div className="topMenu">

            <nav>
                <Link to="/" className="topmenu-link" style={ {color: theme.primary}}>Tinkar 0.0.2 </Link>
            </nav>
            <div className="TopMenu-Avatar">
            <UserMenu/> 
            </div>
            
            <div className="clear"></div>
        </div>
    )

}

export default TopMenu;
