import React, { useState, useEffect, useRef } from 'react';
import { useStateValue } from '../../State/State';
// import CardView from '../../Components/Card/CardView';
import { fire } from '../../fire';
import Slider from "react-slick";
import { relative } from 'path';
import CardSuggestions from '../../Components/Card/CardSuggestions';
import Avatar from '../../Components/Avatar/Avatar';
import TopMenu from '../../Components/TopMenu/TopMenu';
import { Table, Container } from 'semantic-ui-react';
import EditSuggestions from '../Back/EditSuggestions'
import DeleteSuggestion from '../Back/DeleteSuggestion';


export default function SuggestionsPage() {


    const [dataCard, setDataCard] = useState([]);
    useEffect(() => {

        fire.collection('suggestions').orderBy("created", "asc")
            .onSnapshot(
                function (querySnapshot) {
                    let data = querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
                    setDataCard(data);
                    console.log(data);
                })
    }, []);



    const [{ user, theme }, dispatch] = useStateValue();


    return (
        <>
            <TopMenu></TopMenu>      
            <Container>
                    
                <p> Suggestions </p>
                <Table celled fixed singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>DocID</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Link</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>UID</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {dataCard.map((dataCard, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell> {dataCard.docid} </Table.Cell>
                                    <Table.Cell> {dataCard.title} </Table.Cell>
                                    <Table.Cell> {dataCard.link} </Table.Cell>
                                    <Table.Cell> {dataCard.description} </Table.Cell>
                                    <Table.Cell> {dataCard.uid} </Table.Cell>
                                    <Table.Cell> 
                                        <EditSuggestions {...dataCard}/>
                                    </Table.Cell>
                                    <Table.Cell> 
                                        <DeleteSuggestion {...dataCard}/>
                                         </Table.Cell>
                                </Table.Row>


                            )
                        })}

                    </Table.Body>
                </Table>
                </Container>
        </>
    )
}