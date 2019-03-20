import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';


class EventCard extends Component {

    render() {
        return(
            <Card>
                {/* <Card.Img variant="top" src="./img/veeterzy.jpg" /> */}
                <Card.Body>
                    {/* <Card.Subtitle className="mb-2 text-muted">Event name:</Card.Subtitle>
                    <Card.Title>{this.props.eventName}</Card.Title> */}
                    <Card.Subtitle className="mb-2 text-muted">Event organizer name:</Card.Subtitle>
                        <Card.Text>{this.props.organizer}</Card.Text>
                    {/* <Card.Subtitle className="mb-2 text-muted">Order from:</Card.Subtitle>
                    <Card.Text>{this.props.orderPlace}</Card.Text> */}
                    <Card.Subtitle className="mb-2 text-muted">Place:</Card.Subtitle>
                    <Card.Text>{this.props.eventPlace}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Event starts:</Card.Subtitle>
                    <Card.Text>{this.props.date}</Card.Text>
                                        
                    {/* <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Participants:</Card.Subtitle>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Maciej Gjodo</ListGroupItem>
                            <ListGroupItem>Anna Baker</ListGroupItem>
                            <ListGroupItem>Simon Ses</ListGroupItem>
                        </ListGroup>
                    </Card.Body> */}
                                
                    <Card.Body>
                        <Button variant="primary">Join</Button>
                    </Card.Body>
                    
                </Card.Body>
            </Card>
        )
    }
}

export default EventCard;