import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import db from '../firebase/config';

class EventForm extends Component {

    state = { 
        validated: false,
        organizer: '',
        eventPlace: '',
        eventDate: '',
        eventTime: ''
    }

    handleInputChange = (event) => {    
        this.setState({
            [event.target.name]: event.target.value
        });        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.state);
        if(
            this.state.organizer.length < 5 ||
            this.state.eventPlace.length < 5 ||
            this.state.eventDate.length !== 10 ||
            this.state.eventTime.length !== 5 
            ) {
                this.setState({validated: false});
                //console.log('Walidacja KO!');        
            } else {
                this.setState({validated: true});
                //console.log('Walidacja Ok wysyłam formularz.'); 

                db.collection('events').add({ 
                    date: `${this.state.eventDate} Godz:  ${this.state.eventTime}`,
                    eventPlace: this.state.eventPlace,
                    organizer: this.state.organizer,
                    participates: [this.state.organizer]
                });
            }       
    }

    render() {
        if(!this.state.validated) {
            return (
                <Form onSubmit={this.handleSubmit}>                              
                    <Form.Group>
                        <Form.Label>Event organizer name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter owner name"
                            name="organizer" 
                            value={this.state.organizer} 
                            onChange={this.handleInputChange}
                            isValid={this.state.organizer.length >= 5}
                            isInvalid={this.state.organizer.length < 5 && this.state.organizer.length !== 0}
                            required                        
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Where event teake place?</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="City Street Number/ company name" 
                            name="eventPlace" 
                            value={this.state.eventPlace} 
                            onChange={this.handleInputChange}
                            isValid={this.state.eventPlace.length >= 5}
                            isInvalid={this.state.eventPlace.length < 5 && this.state.eventPlace.length !== 0}
                            required
                            
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide info where event teake place?
                        </Form.Control.Feedback>
                    </Form.Group>                                        
                    
                    <Row>
                        <Form.Group as={Col} controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control  
                                type="date" 
                                placeholder="dd-mm-rrrr" 
                                name="eventDate" 
                                value={this.state.eventDate} 
                                onChange={this.handleInputChange}
                                isValid={this.state.eventDate.length === 10}
                                required
                            />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control 
                                type="time" 
                                placeholder="hh:mm" 
                                name="eventTime" value={this.state.eventTime} 
                                onChange={this.handleInputChange}
                                isValid={this.state.eventTime.length === 5}
                                required
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">Create</Button>
                </Form>
            )
        } else {
            return(
                <p>Event Added. If you want create mor refresh site.</p>
            )
        }        
    }
}

export default EventForm;