import React from 'react';
import { Modal, Button, Card, Label, Icon, Container, Segment, Header, Divider } from 'semantic-ui-react'
// import UpdateCard from '../UpdateCard/UpdateCard';
import LikeCard from '../CardLike/LikeCard';


export default function CardView(props) {

    let mediaSwitch = props.media;
    let iconMediaName, textMedia;

    switch (mediaSwitch) {
        case "audio":
            iconMediaName = "volume up";
            textMedia = "Audio"
            break;
        case "text":
            iconMediaName = "book";
            textMedia = "Text"
            break;
        case "code":
            iconMediaName = "code";
            textMedia = "code"
            break;
        case "Live":
            iconMediaName = "calendar alternate outline";
            textMedia = "Event"
            break;
        case "video":
            iconMediaName = "volume up";
            textMedia = "Video"
            break;
        case "mix":
            iconMediaName = "mixcloud"
            textMedia = "Mix media";
            break;
        default:
            iconMediaName = "other"
            textMedia = "Mix media";;
    }

    return (
        <Container fluid>
            <Segment raised>
                <Card fluid className="card" style={{ background: props.background, borderColor: props.border }}  >
                    <Card.Content>
                        <Label horizontal>
                            <Icon name="clock outline" />
                            {props.duration}
                        </Label>
                        <Label horizontal>
                            <Icon name="heart" color="red" />
                            {props.likes}
                        </Label>
                        <Divider/> 
                        <div className="card-title">
                            <h3>{props.title}</h3>
                        </div>
                        <div className="card-description">
                            <p> {props.description}</p>
                        </div>
                    </Card.Content>
                    <Card.Content className="card-type">
                        <Label as='a' title="Media">
                            <Icon name={iconMediaName} />
                            {textMedia}
                        </Label>
                        <Label as='a'>
                            <Icon name="comment alternate outline" />
                            {props.mediaType}
                        </Label>
                    </Card.Content>
                    <Card.Content className="card-footer">
                    <a href={props.link} target="_blank" rel="noopener noreferrer" >
                    <Button as="div"  circular icon="eye" color="green"  title={props.link} size="large" floated="left" >
                    </Button>
                    </a>



                        <Modal trigger={<Button icon="info" color="facebook" circular/>} closeIcon>
                            <Modal.Header>Card Info</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <Header>{props.title}</Header>
                                    <Label as='a' title="Media">
                                        <Icon name={iconMediaName} />
                                        {textMedia}
                                    </Label>
                                    <Label as='a'>
                                        <Icon name="comment alternate outline" />
                                        {props.mediaType}
                                    </Label>
                                    <Label as='a'>
                                        <Icon name="terminal" />
                                        {props.position}
                                    </Label>
                                    <Label as='a'>
                                        <Icon name="react" />
                                        {props.eco}
                                    </Label>

                                    <Label as='a'>
                                        <Icon name="tag" />
                                        {props.tags}
                                    </Label>

                                </Modal.Description>
                                <Modal.Description>
                                    <ul>
                                        <li>Document ID: {props.docid}</li>
                                        <li>Created at : {Date(props.created)} </li>
                                        <li>Created by: {props.username}</li>
                                    </ul>

                                    <p>Comming Soon: Filter Cards by Functionality</p>
                                    <p>If you want to make a suggestion about this card use the Doc ID: <strong> {props.docid}  </strong> </p>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>

                        <LikeCard {...props} />

                    </Card.Content>

                </Card>
            </Segment>
        </Container>

    )
}