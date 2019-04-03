import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import db from '../firebase/config';

import Button from 'react-bootstrap/Button';
//import setActiveCard from '../hepers/setActiveCard';


class FormEvent extends Component {

    state = { 
        validated: false,
        redirect: false,
        eventName: '',
        food: '',
        organizer: '',
        eventPlace: '',
        eventDate: '',
        eventTime: ''
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            //setActiveCard(); // change nav vard. 
          return <Redirect to='/events/'/>
        }
    }

    handleInputChange = (event) => {    
        this.setState({
            [event.target.name]: event.target.value
        });        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(
            this.state.eventName.length < 5 ||
            this.state.organizer.length < 5 ||
            this.state.eventPlace.length < 5 ||
            this.state.eventDate.length !== 10 ||
            this.state.eventTime.length !== 5  ||
            this.state.food.length < 5
            ) {
                this.setState({validated: false});       
            } else {
                this.setState({validated: true, redirect: true}); 

                db.collection('events').add({ 
                    eventName: this.state.eventName,
                    date: this.state.eventDate,
                    time: this.state.eventTime,
                    eventPlace: this.state.eventPlace,
                    organizer: this.state.organizer,
                    participates: [`Organizer ${this.state.organizer} will eat ${this.state.food}`],
                    timeStamp: new Date(`${this.state.eventDate} ${this.state.eventTime}`).getTime()
                });
            }       
    }

    render() {
        const year = new Date().getFullYear();
        const mounth = parseInt(new Date().getMonth() + 1 );
        const mounthOnTwoSigns = mounth < 10 ? `0${mounth}`: mounth;
        const day= new Date().getDate();
        const dayOnTwoSigns =  day < 10 ? `0${day}` : day;
        const currentDate = `${year}-${mounthOnTwoSigns}-${dayOnTwoSigns}`;
        const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        return (
            <>
                {this.renderRedirect()}
                <h1 id='event-form'>Create own food event </h1>
                <Form onSubmit={this.handleSubmit}>  
                    <Form.Group>
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Name"
                            name="eventName" 
                            value={this.state.eventName} 
                            onChange={this.handleInputChange}
                            isValid={this.state.eventName.length >= 5}
                            isInvalid={this.state.eventName.length < 5 && this.state.eventName.length !== 0}
                            required                        
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Event Name. Min 5 characters.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col}>
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
                                Please provide a valid Name. Min 5 characters.
                            </Form.Control.Feedback>
                        </Form.Group>
                    
                        <Form.Group  as={Col}>
                            <Form.Label>What you Will Eat?</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your food"
                                name="food" 
                                value={this.state.food} 
                                onChange={this.handleInputChange}
                                isValid={this.state.food.length >= 5}
                                isInvalid={this.state.food.length < 5 && this.state.food.length !== 0}
                                required                        
                                />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Name. Min 5 characters.
                            </Form.Control.Feedback>
                        </Form.Group>                       
                    </Row>
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
                            Please provide info where event teake place? Min 5 characters.
                        </Form.Control.Feedback>
                    </Form.Group>                                        
                    
                    <Row>
                        <Form.Group as={Col} controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                min={currentDate} 
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
                                min={this.state.eventDate === currentDate ? time : null}
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
            </>
        )       
    }
}

export default FormEvent;