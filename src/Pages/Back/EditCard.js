import React, { useState, useEffect } from 'react'
import { Button, Form, Modal, Container, TextArea, Checkbox, Input } from 'semantic-ui-react'
import { fire, firebaseApp } from '../../fire';
import { useStateValue } from '../../State/State';

export default function EditCard(props) {


    const [{ user }, dispatch] = useStateValue();

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [link, setLink] = useState(props.link);
    const [tags, setTags] = useState(props.tags); // 2019, Apollo, BillGates, OpenSource, etc... 
    const [media, setMedia] = useState(props.media); // Audio, Video, Text, Code, Live, Misc
    const [mediaType, setMediaType] = useState(props.mediaType); // Blog, Podcast, Book, etcc
    const [position, setPosition] = useState(props.position); // Frontend, Backend, Devops, Full
    const [eco, setEco] = useState(props.eco); // React, Angular, Node, 
    const [duration, setDuration] = useState(props.duration); // 5m  Duration of the course / book / etcc
    const [rookie, setRookie] = useState(props.rookie ? true : false); // Rookie Friendy
    const [must, setMust] = useState(props.must ? true : false); // It is a must 
    const [hard, setHard] = useState(props.hard ? true : false ); // Complex Resource for pros *Devops, Redux, CS 
  

    let data = { title, description, link, tags, media, mediaType, position, eco, duration, rookie, must, hard };


    function updateData(e) {
        e.preventDefault();
        console.log(data);
        fire.collection('card').doc(props.docid).update({
            title: data.title,
            description: data.description,
            link: data.link,
            tags: data.tags,
            media: data.media,
            mediaType: data.mediaType,
            position: data.position,
            eco: data.eco,
            duration: data.duration,
            rookie: data.rookie,
            must: data.must,
            hard: data.hard,
            updated: firebaseApp.firestore.Timestamp.fromDate(new Date())
        }).then(
            function () {
                alert(`You Updated your card:
          - Title: ${data.title} 
          - Description: ${data.link}
          - Link: ${data.link}

          Close Modal
          `)


            }
        ).catch(
            function (error) {
                console.error("Error updating document: ", error);
                alert(`Error:
          Oopps! Something went wrong.
            [EditCard]
         ${error} `)
            }
        );
    }


    const optionsMedia = [
        { key: 'a', text: 'Audio', value: 'audio' },
        { key: 't', text: 'Text', value: 'text' },
        { key: 'c', text: 'Code', value: 'code' },
        { key: 'l', text: 'Live', value: 'live' },
        { key: 'v', text: 'Video', value: 'video' },
        { key: 'm', text: 'Mix', value: 'mix' },
      ]
    
      const optionsMediaType = [
        { key: 'a', text: 'AudioBook', value: 'audiobook' },
        { key: 'ap', text: 'App', value: 'app' },
        { key: 'b', text: 'Book', value: 'book' },
        { key: 'p', text: 'Blog Post', value: 'post' },
        { key: 't', text: 'Tutorial', value: 'tutorial' },
        { key: 'c', text: 'Course', value: 'course' },
        { key: 'pc', text: 'Podcast', value: 'podcast' },
        { key: 'w', text: 'Website', value: 'website' },
        { key: 'm', text: 'POI', value: 'poi' },
        { key: 'mb', text: 'BOI', value: 'boi' },
        { key: 'e', text: 'Event', value: 'event' },
        { key: 'mv', text: 'Miscelaneous', value: 'misc' },
      ]
    
      const optionsPosition = [
        { key: 'f', text: 'Frontend', value: 'front' },
        { key: 'b', text: 'Backend', value: 'back' },
        { key: 'fs', text: 'FullStack', value: 'full' },
        { key: 'd', text: 'DevOps', value: 'dev' },
        { key: 'c', text: 'CS - General', value: 'cs' },
      ]
    
      const optionsEco = [
        { key: 'r', text: 'React', value: 'react' },
        { key: 'a', text: 'Angular', value: 'angular' },
        { key: 'n', text: 'Node', value: 'node' },
        { key: 'e', text: 'Express', value: 'express' },
        { key: 'm', text: 'Mongo', value: 'mongo' },
        { key: 'o', text: 'Other', value: 'other' },
      ]

    return (
        <Modal trigger={<Button>Edit Card</Button>} closeIcon  >
            <Modal.Content>
            <Container>
                <h3> Edit and Update Card </h3> 
                <p> Doc ID: {props.docid} </p>
      <Form onSubmit={(e) => { updateData(e) }}>
        <Form.Field>
          <TextArea className="inputTextArea" rows="2" type="text" placeholder="Title | Max Length 65" required minLength="3" maxLength="65"
            value={title} onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value)
            }
            } />
        </Form.Field>
        <Form.Field>
          <TextArea className="inputTextArea" type="text" rows="4" placeholder="Description | Max Length 400" required minLength="3" maxLength="400"
            value={description} onChange={(e) => {
              e.preventDefault();
              setDescription(e.target.value)
            }} />
        </Form.Field>
        <Form.Field>
          <Input className="inputForm" type="url" placeholder="https://example.com" required pattern="https?://.+"
            value={link} onChange={(e) => {
              e.preventDefault();
              setLink(e.target.value)
            }} />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Select label='Media used on the card'  options={optionsMedia} defaultValue={media}
            onChange={(e, { value }) => {
              setMedia(value);
            }} />
          <Form.Select label='Media Type'   options={optionsMediaType} defaultValue={mediaType}
            onChange={(e, { value }) => {
              setMediaType(value);
            }} />
          <Form.Select label='Position'   options={optionsPosition} defaultValue={position}
            onChange={(e, { value }) => {
              setPosition(value);
            }} />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select label='MEARN Ecosystem' options={optionsEco} defaultValue={eco}
            onChange={(e, { value }) => {
              setEco(value);
            }} />
          <Form.Input label='3 Tags keywords' placeholder='Source - Brand - Free - ' value={tags} onChange={(e) => {
            e.preventDefault();
            setTags(e.target.value)
          }} />
          <Form.Input label='Duration' placeholder='s - m - h - d' maxLength="3" value={duration} onChange={(e) => {
            e.preventDefault();
            setDuration(e.target.value)
          }} />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <Checkbox label='Rookie Friendly' checked={rookie}  onClick={(e) => {
              rookie ?  setRookie(false) : setRookie(true);
            }} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='It is a must' checked={must}  onClick={(e) => {
              must ? setMust(false) : setMust(true)
            }} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Extra Hard' checked={hard} onClick={(e) => {

              hard ? setHard(false) : setHard(true)
            }} />
          </Form.Field>
        </Form.Group>


        <Button type="submit" className="submit"> Submit Card </Button>
      </Form>
    </Container>

            </Modal.Content>
        </Modal>

    )

}