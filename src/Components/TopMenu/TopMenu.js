import React from 'react';
import { useStateValue } from '../../State/State';
import './TopMenu.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserMenu from '../../HOC/UserMenu/UserMenu'


function TopMenu() {

    const [{ theme }, dispatch] = useStateValue();
    return (
        <>

            <nav className="topnav" id="myTopnav"  >
                <Link to="/" className="topmenu-link" style={ {color: theme.primary}}>Tinkar </Link>
            </nav>
            <div className="TopMenu-Avatar">
            <UserMenu/> 
            </div>
            
            <div className="clear"></div>
        </>
    )

}

export default TopMenu;
