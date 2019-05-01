import React from 'react';
import { useStateValue } from '../State/State';
import {Button } from 'semantic-ui-react';

export default function GeneralStyleButton() {

    const [{ theme }, dispatch] = useStateValue();
    
    return (
        <>  
        <div className="GeneralStyleButton">
            <Button className="light-theme"  value="light"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: 
                    { primary: 'black', background: "rgb(245,245,245)",  cardBack: "rgb(255,255,255)" }
                })}>Light</Button>
            <Button inverted value="dark"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme:
                     { primary: 'white',  background: "rgb(20,20,20)", cardBack: "rgb(0,0,0)"}
                })}>Dark</Button>
        </div>
        </>
    )
}