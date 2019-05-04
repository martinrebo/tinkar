import React, { useState, useEffect } from 'react'
// import './FormResearchCard.scss';
import { Form, Button, Icon, TextArea, Input, Container, Segment } from 'semantic-ui-react'
import { fire, firebaseApp } from '../../fire';
import { useStateValue } from '../../State/State';

export default function FormResearchCard() {

  const [{ user }, dispatch] = useStateValue();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");


  console.log(user.uid);

  let data = { title, description, link };


  function sendData(e) {
    e.preventDefault();
    console.log(data);
    fire.collection('suggestions').add({
      title: data.title,
      description: data.description,
      link: data.link,
      uid: user.uid,
      userName: user.displayName,
      created: firebaseApp.firestore.Timestamp.fromDate(new Date())
    }).then(
      function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert(`You added a new card:
        - Title: ${data.title} 
        - Link: ${data.link}
        `)
        fire.collection('suggestions').doc(docRef.id).update({
          docid: docRef.id,
        })
          .then(console.log("[SuggestCardForm] updateCardId " + docRef.id))
          .catch(function (error) { console.error('[SuggestCardForm] error: ', error) })

        setTitle("");
        setDescription("");
        setLink("");

      }
    ).catch(
      function (error) {
        console.error("Error adding document: ", error);
        alert(`Error:
        Oopps! Something went wrong in [SuggestCardForm] Component
       ${error} `)
      }
    );
  }

  return (
    <Container>
      <Form onSubmit={(e) => { sendData(e) }}>
        <Form.Field>
          <TextArea label="Title" className="inputTextArea" rows="1" type="text" placeholder="Title | Max Length 65" required minLength="3" maxLength="65"
            value={title} onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value)
            }
            } />
        </Form.Field>
        <Form.Field>
          <Input label="Link" className="inputForm" type="url" placeholder="https://example.com" required pattern="https?://.+"
            value={link} onChange={(e) => {
              e.preventDefault();
              setLink(e.target.value)
            }} />
        </Form.Field>
        <Form.Field>
          <TextArea label="Comments" className="inputTextArea" rows="3" type="text" placeholder="Optional Comments| Max Length 65" minLength="0" maxLength="65"
            value={description} onChange={(e) => {
              e.preventDefault();
              setDescription(e.target.value)
            }
            } />

        </Form.Field>
        <p>
          <Button type="submit" floated="right">Suggest</Button>
        </p>
        <br />

      </Form>

    </Container>

  )
}