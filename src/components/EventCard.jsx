import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


class EventCard extends Component {

    render() {
        return(
            <Card>
                {/* <Card.Img variant="top" src="./img/veeterzy.jpg" /> */}
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Event name:</Card.Subtitle>
                    <Card.Title>(Event name)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Event owner name:</Card.Subtitle>
                        <Card.Text> (Event owner name) </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Order from:</Card.Subtitle>
                    <Card.Text> (Order from) </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Place:</Card.Subtitle>
                    <Card.Text> (Place) </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Event starts:</Card.Subtitle>
                    <Card.Text> (Event starts) </Card.Text>
                                        
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Participants:</Card.Subtitle>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Bruno Mars</ListGroupItem>
                            <ListGroupItem>Anna Baker</ListGroupItem>
                            <ListGroupItem>Simon Ses</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                                
                    <Card.Body>
                        <Button variant="primary">Join</Button>
                    </Card.Body>
                    
                </Card.Body>
            </Card>
        )
    }
}

export default EventCard;