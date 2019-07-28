import React from 'react'
import UserMenu from '../../Components/UserMenu/UserMenu';
import { Card, Container} from 'semantic-ui-react';

export default function LoginPage() {
    return (
        <Container>
            <Card centered >
                <Card.Content> <Card.Header>  ESCard </Card.Header> </Card.Content>
                <Card.Content> 
                    <Card.Description> Tinder style Javascript cards </Card.Description> </Card.Content>
                <Card.Content>
                    <UserMenu />
                </Card.Content>

            </Card>
        </Container>
    )
}