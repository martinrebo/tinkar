import React, { useState, useEffect } from 'react'
import { Button, Label, Icon } from 'semantic-ui-react';
import { fire, firebaseApp } from '../../fire';


export default function LikeCard(props) {

    const [likes, setLikes] = useState(props.likes);

    useEffect(() => {
        setLikes(props.likes)
    }, [])

    function likeCard() {
        fire.collection('card').doc(props.docid).update({
            likes: likes + 1,
            updated: firebaseApp.firestore.Timestamp.fromDate(new Date())
        }).then(
            function () {
                console.log(`You Liked your card:
          - Likes on database: ${likes + 1}  `)
            }
        ).catch(
            function (error) {
                console.error("Error Liking document: ", error);
                alert(`Error:
          Oopps! Something went wrong.
           [LikeCard Module ]
         ${error} `)
            }
        );

    }


    return (
        <>
            <Button as="div" floated="right" circular icon="heart" color="red" onClick={(e) => {
                e.preventDefault();
                setLikes(likes + 1);
                likeCard();
            }}  >
            </Button>


        </>
    )
}