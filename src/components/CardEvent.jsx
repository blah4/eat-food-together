import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ListGroupItem from 'react-bootstrap/ListGroupItem';

import JoinModal from './JoinModal';
import DeleteModal from './DeleteModal';

class CardEvent extends Component {

    state={
        timeToEndEvent: this.props.timeStamp - new Date().getTime()
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timeToEndEvent: prevState.timeToEndEvent - 1000}))
            if(this.state.timeToEndEvent < 0) {
                this.props.deleteEvent(this.props.eventId);  
            } 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return(
            <li id={this.props.uniqueKey}>
                <Card>
                    {/* <Card.Img variant="top" src="./img/veeterzy.jpg" /> */}
                    <Card.Body>
                        <Row>
                            <Col md>
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
                            </Col>
                            <Col md>   
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Participants:</Card.Subtitle>
                                    <ListGroup className="list-group-flush">
                                        {this.props.participates.map((participate, index) => 
                                            <ListGroup.Item key={index}>{participate}</ListGroup.Item>
                                            )}
                                    </ListGroup>
                                </Card.Body>
                            </Col>          
                        </Row>
                        <Row>
                            <Card.Body>
                                <JoinModal eventId={this.props.eventId} addMember={this.props.addMember} />
                                <DeleteModal eventId={this.props.eventId} deleteEvent={this.props.deleteEvent}/>
                            </Card.Body> 
                        </Row>      
                    </Card.Body>
                </Card>
            </li>
        )
    }
}

export default CardEvent;