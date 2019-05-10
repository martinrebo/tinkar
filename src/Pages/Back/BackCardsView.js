import React, {useState, useEffect} from 'react'
import {Table, Container} from 'semantic-ui-react'
import {fire} from '../../fire'
import EditCard from './EditCard'



export default function BackCardsView() {


    const [dataCard, setDataCard] = useState([]);
    useEffect(() => {

        fire.collection('card').orderBy("created", "asc")
            .onSnapshot(
                function (querySnapshot) {
                    let data = querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
                    setDataCard(data);
                    console.log(data);
                })
    }, []);

    return(
        <Container>
                    
        <p> Public Cards </p>
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
                                <EditCard {...dataCard}/>
                            </Table.Cell>
                            <Table.Cell> 
                                {/* <DeleteSuggestion {...dataCard}/> */}
                                 </Table.Cell>
                        </Table.Row>


                    )
                })}

            </Table.Body>
        </Table>
        </Container>
    )
}