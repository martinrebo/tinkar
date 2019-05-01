import React from 'react';
import { Modal, Button, Card, Label, Icon } from 'semantic-ui-react'
import UpdateCard from '../../HOC/UpdateCard/UpdateCard';
import LikeCard from '../../HOC/LikeCard/LikeCard';


export default function CardResearch(props) {

    return (
        <Card fluid className="card" style={{ background: props.background, borderColor: props.border }} >
            <Card.Content>
                <Card.Header className="card-top">

                    <Label as="a" floated="left" basic color="teal">
                        <Icon name="sitemap" /> {props.branch}
                    </Label>
                    <Modal trigger={<Button circular icon="settings" floated="right"></Button>} closeIcon >
                        <Modal.Description >
                            <UpdateCard {...props} />
                        </Modal.Description>
                    </Modal>
                </Card.Header>

            </Card.Content>
            <Card.Content>
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>

                <div className="card-description">
                    <p> {props.description}</p>
                </div>

                <p> {props.test}</p>
                <hr />
                <p className="card-type"> <span className="icon icon-type" /> {props.type}</p>
            </Card.Content>
            <Card.Content className="card-footer">
                <a href={props.link} target="_blank" rel="noopener noreferrer" >
                    <Icon link circular name="eye" size="large" color="green" inverted title={props.link}>
                    </Icon>
                </a>
                <LikeCard {...props} />

            </Card.Content>

        </Card>

    )
}