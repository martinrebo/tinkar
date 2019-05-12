import React from 'react'
import {fireAuth} from '../../fire'
import { useStateValue } from '../../State/State';
import { Button } from 'semantic-ui-react';

export default function LogOut() {

    const [{ user }, dispatch] = useStateValue();

console.log( "Logout " + user.displayName )

    return ( 
        <div>
        <Button onClick={() =>{ 
            fireAuth.auth().signOut()
            dispatch({ type: "login", newUser: {
                displayName: 'Login',
                photoURL: 'https://api.adorable.io/avatars/285/abott@adorable.png'
              }
        }) ;
            }}>LogOut</Button>
            
        </div>
    )
}