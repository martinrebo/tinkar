import React from 'react'
import UserMenu from '../../Components/UserMenu/UserMenu';
import { Icon, Card, Container, Label, } from 'semantic-ui-react';

export default function LoginPage() {
    return (
        <Container>
            <Card centered >
                <Card.Content> <Card.Header>  ESCard </Card.Header> </Card.Content>
                <Card.Content> 
                    <Card.Description> Tinder style Javascript cards </Card.Description> </Card.Content>
                <Card.Content>
                    <Card.Description> Follow us:   </Card.Description>
                    <br></br>
                    <Label>
                        <a href="https://github.com/martinrebo/escard" target="_blank" rel="noopener noreferrer">
                            <Icon link size="large" color="teal" name="github" /> Github </a> </Label>
                    <Label>
                        <a href="https://twitter.com/warteamx"> <Icon link size="large" color="teal" name="twitter"></Icon> Twitter @warteamx </a> </Label>
                </Card.Content>
                <Card.Content>
                    <UserMenu />
                </Card.Content>

            </Card>
        </Container>
    )
}