import React from 'react';
import { useStateValue } from '../State/State';
import './GeneralSytleButton.scss';

export default function GeneralStyleButton() {

    const [{ theme }, dispatch] = useStateValue();
    
    return (
        <>  
        <div className="GeneralStyleButton">
            <button style={{ color: "black", background:"white" }} value="light"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme: 
                    { primary: 'black', background: "rgba(255,255,255,0.8)",  cardBack: "rgba(255,255,255,0.9)" }
                })}>Light</button>
            <button style={{ color: "white", background: "black"  }} value="dark"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme:
                     { primary: 'white',  background: "rgba(0,0,0,0.5)", cardBack: "rgba(0,0,0,0.8)"}
                })}>Dark</button>
            <button style={{ color: "black", background:"white"}} value="default"
                onClick={() => dispatch({
                    type: 'changeTheme',
                    newTheme:
                     { primary: 'black', background: "rgba(255,255,255,0.4)", cardBack: "rgba(255,255,255,0.6)"  }
                })}>Default</button>
        </div>
        </>
    )
}