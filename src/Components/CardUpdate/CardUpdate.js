import React, { useState, useEffect } from 'react'
import { Card, Button, Form, Radio, Modal } from 'semantic-ui-react'
import { fire, firebaseApp } from '../../fire';
import { useStateValue } from '../../State/State';

export default function UpdateCard(props) {


    const [{ user }, dispatch] = useStateValue();

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [link, setLink] = useState(props.link);
    const [branch, setBranch] = useState(props.branch);
    const [type, setType] = useState("");
    const [tags, setTags] = useState("");

    let data = { title, description, link, branch, type, tags };


    function updateData(e) {
        e.preventDefault();
        console.log(data);
        fire.collection('card').doc(props.id).update({
            title: data.title,
            description: data.description,
            link: data.link,
            branch: data.branch,
            type: data.type,
            tags: data.tags,
            updated: firebaseApp.firestore.Timestamp.fromDate(new Date())
        }).then(
            function () {
                alert(`You Updated your card:
          - Title: ${data.title} 
          - Description: ${data.link}
          - Link: ${data.link}
          - Branch: ${data.branch}
          - Type: ${data.type}
          `)

            }
        ).catch(
            function (error) {
                console.error("Error updating document: ", error);
                alert(`Error:
          Oopps! Something went wrong.
          It can be :
          You need to be Logged in to be able to Add Cards.
          You only can modify your own cards
          [UpdateCard]
         ${error} `)
            }
        );
    }

    return (
        <Modal trigger={<Button>Edit</Button>} >
            <Modal.Content>
                <Card fluid>
                    <Card.Content>
                        <Card.Header> Add Suggestion to ESCards database </Card.Header>
                    </Card.Content>
                    <Card.Content>

                        <Form onSubmit={(e) => updateData(e)}>
                            <Form.Group inline>

                                <Form.Field>
                                    <Radio
                                        label='Business'
                                        value='business'
                                        name="branch"
                                        checked={branch === "business"}
                                        onChange={(e) => {
                                            setBranch(e.target.value);
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Health'
                                        value='health'
                                        name="branch"
                                        checked={branch === "health"}
                                        onChange={(e) => {
                                            setBranch(e.target.value);
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label='Tech'
                                        value='tech'
                                        name="branch"
                                        checked={branch === "tech"}
                                        onChange={(e) => {
                                            setBranch(e.target.value);
                                        }}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field label='Title' control='input' value={title}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setTitle(e.target.value)
                                }
                                } />

                            <Form.Field label='Description' control='textarea' value={description} rows='3' onChange={(e) => {
                                e.preventDefault();
                                setDescription(e.target.value)
                            }
                            } />
                            <Form.Field label="URL" control="input" type="url" pattern="https?://.+"
                                value={link} onChange={(e) => {
                                    e.preventDefault();
                                    setLink(e.target.value)
                                }} />

                            <Form.Group widths='equal'>
                                <Form.Field label='Tags' control='input' placeholder={props.tags} />
                                <Form.Field label='Type' control='select'>
                                    <option value='article'>Article</option>
                                    <option value='course'>Course</option>
                                    <option value='video'>Video</option>
                                    <option value='podcast'>Podcast</option>
                                    <option value='website'>Website</option>
                                    <option value='person'>Person</option>
                                </Form.Field>

                            </Form.Group>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Card.Content>
                </Card>
            </Modal.Content>
        </Modal>

    )

}