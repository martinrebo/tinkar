import React from 'react';
import { Modal, Button, Icon, Table, Menu } from 'semantic-ui-react';
import CardUpdate from '../CardUpdate/CardUpdate';

export default function CardSuggestions(props) {
    return (
        <div className="card" style={{ background: props.background }}>


            <img src={props.src} alt="" style={{ maxHeight: "100px" }} ></img>
            <p>Title : {props.title}</p>
            <p> Description :  {props.description}</p>
            <p>Link: <a href={props.link} target="_blank" rel="noopener noreferrer" > {props.link}</a> </p>
            <p>user id: {props.uid} </p>
            <Modal closeIcon trigger={<Button>Edit Suggestion </Button>}>
                <Modal.Header>Add Suggestion to Card Database</Modal.Header>
                <Modal.Content>
                    <CardUpdate {...props} />
                </Modal.Content>
            </Modal>

        </div>
    )
}


