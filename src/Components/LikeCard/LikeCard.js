import React, { useState, useEffect } from 'react'
import { Button, Label, Icon } from 'semantic-ui-react';
import { fire, firebaseApp } from '../../fire';


export default function LikeCard(props) {

    const [likes, setLikes] = useState(props.likes);

    useEffect(() => {
        setLikes(props.likes)
    }, [])

    function likeCard() {
        fire.collection('card').doc(props.id).update({
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
            {/* <Button color="red" content="Like Me" icon="heart" inverted floated="right"
                label={{ basic: true, color: 'red', pointing: 'left', content: likes }}
                onClick={(e) => {
                    e.preventDefault();
                    setLikes(likes + 1);
                    likeCard();
                }}> </Button> */}

            <Button as="div" labelPosition='right' floated="right" onClick={(e) => {
                e.preventDefault();
                setLikes(likes + 1);
                likeCard();
            }}  >
                <Button  inverted color='red'>
                    <Icon name='heart' />
                    Like
      </Button>
                <Label as='a' basic color='red' pointing='left'>
                    {likes}
                </Label>
            </Button>


        </>
    )
}