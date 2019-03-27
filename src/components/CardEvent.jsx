import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//import ListGroupItem from 'react-bootstrap/ListGroupItem';

import JoinModal from './JoinModal';
import DeleteModal from './DeleteModal';

class CardEvent extends Component {

    render() {
        return(
            <li id={this.props.uniqueKey}>
                <Card>
                    {/* <Card.Img variant="top" src="./img/veeterzy.jpg" /> */}
                    <Card.Body>
                        <Card.Title>{this.props.eventName}</Card.Title>
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
                                            
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Participants:</Card.Subtitle>
                            <ListGroup className="list-group-flush">
                                {this.props.participates.map((participate, index) => 
                                    <ListGroup.Item key={index}>{participate}</ListGroup.Item>
                                    )}
                            </ListGroup>
                        </Card.Body>
                                    
                        <Card.Body>
                            <JoinModal eventId={this.props.eventId} addMember={this.props.addMember} />
                            <DeleteModal eventId={this.props.eventId} deleteEvent={this.props.deleteEvent}/>
                        </Card.Body>                   
                    </Card.Body>
                </Card>
            </li>
        )
    }
}

export default CardEvent;