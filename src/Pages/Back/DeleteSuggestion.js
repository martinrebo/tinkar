import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import { fire }  from '../../fire'



export default function DeleteSuggestion(props) {

    function deleteSuggestion(e) {
        e.preventDefault();
        return(
            fire.collection("suggestions").doc(props.docid).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            })
        )
    }

    return(
        <Modal  trigger={<Button color="red">Delete</Button>}>
            <Modal.Content>
<p>You are going to delete permanenty {props.docid} </p>

            </Modal.Content>
            <Modal.Actions>
                <Button onClick={(e)=> deleteSuggestion(e)}> Delete Permanently </Button>
            </Modal.Actions>
        </Modal>
    )
}