import React from 'react';
import { Modal, Button, Card, Label, Icon } from 'semantic-ui-react'
// import UpdateCard from '../UpdateCard/UpdateCard';
import LikeCard from '../CardLike/LikeCard';


export default function CardView(props) {

    return (
        <Card fluid className="card" style={{ background: props.background, borderColor: props.border }} >
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