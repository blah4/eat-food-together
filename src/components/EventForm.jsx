import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EventForm extends Component {

    state = { 
        validated: false,
        eventName: '',
        eventOwner: '',
        orderPlace: '',
        eventPlace: '',
        eventDate: '',
        eventTime: '',
        ownerOrder: ''
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
            this.state.eventName.length < 5 ||
            this.state.eventOwner.length < 5 ||
            this.state.orderPlace.length < 5 ||
            this.state.eventPlace.length < 5 ||
            this.state.eventDate.length !== 10 ||
            this.state.eventTime.length !== 5 ||
            this.state.ownerOrder.length < 5
            ) {
                this.setState({validated: false});
                console.log('Walidacja KO!');
            } else {
                this.setState({validated: true});
                console.log('Walidacja Ok wysyłam formularz.'); 
            }       
    }

    render() {
        if(!this.state.validated) {
            return (
                <Form onSubmit={this.handleSubmit}>                
                    <Form.Group>
                        <Form.Label>Event name</Form.Label>
                        <Form.Control                         
                            type="text" 
                            placeholder="Enter Event name" 
                            name="eventName" 
                            value={this.state.eventName} 
                            onChange={this.handleInputChange} 
                            isValid={this.state.eventName.length >= 5}
                            isInvalid={this.state.eventName.length < 5 && this.state.eventName.length !== 0}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Event name, must have minimum 5 charakters.
                        </Form.Control.Feedback>
                    </Form.Group>  
                    
                    <Form.Group>
                        <Form.Label>Event organizer name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter owner name"
                            name="eventOwner" 
                            value={this.state.eventOwner} 
                            onChange={this.handleInputChange}
                            isValid={this.state.eventOwner.length >= 5}
                            isInvalid={this.state.eventOwner.length < 5 && this.state.eventOwner.length !== 0}
                            required                        
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label>Where do you order from?</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter where do you order from?" 
                            name="orderPlace" 
                            value={this.state.orderPlace} 
                            onChange={this.handleInputChange}
                            isValid={this.state.orderPlace.length >= 5}
                            isInvalid={this.state.orderPlace.length < 5 && this.state.orderPlace.length !== 0}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide info where do you order from?.
                        </Form.Control.Feedback>
                    </Form.Group> 
    
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Where event teake place</Form.Label>
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
                            <Form.Control.Feedback  type="invalid">
                                Invalid Date
                            </Form.Control.Feedback>
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
                            <Form.Control.Feedback type="invalid">
                                Invalid Tiem
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
    
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>What food you order?</Form.Label>
                        <Form.Control  
                            type="text" 
                            placeholder="Enter food" 
                            name="ownerOrder" 
                            value={this.state.ownerOrder} 
                            onChange={this.handleInputChange}
                            isValid={this.state.ownerOrder.length >= 5}
                            isInvalid={this.state.ownerOrder.length < 5 && this.state.ownerOrder.length !== 0}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            What food you order?
                        </Form.Control.Feedback>
                    </Form.Group>
    
                    {/* {this.state.validated ? null : <Button variant="primary" type="submit">Create</Button>} */}
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