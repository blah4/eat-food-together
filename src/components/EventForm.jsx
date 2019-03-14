import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class EventForm extends Component {

    state = { validated: false }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        event.preventDefault();
        this.setState({ validated: true });
        console.log(event);
      }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Group>
                        <Form.Label>Event name</Form.Label>
                        <Form.Control  required type="text" placeholder="Enter Event name" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Event name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Event owner name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter owner name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Where do you order from?</Form.Label>
                        <Form.Control required type="text" placeholder="Enter where do you order from?" />
                        <Form.Control.Feedback type="invalid">
                            Please provide info where do you order from?.
                        </Form.Control.Feedback>
                    </Form.Group> 

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Where event teake place</Form.Label>
                        <Form.Control required type="text" placeholder="City Street Number/ company name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide info where event teake place?
                        </Form.Control.Feedback>
                    </Form.Group>                                        
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control required type="date" placeholder="dd-mm-rrrr" />
                            <Form.Control.Feedback type="invalid">
                                Invalid Date
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control required type="time" placeholder="hh:mm" />
                            <Form.Control.Feedback type="invalid">
                                Invalid Tiem
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>What food you order?</Form.Label>
                        <Form.Control required type="text" placeholder="Enter food" />
                        <Form.Control.Feedback type="invalid">
                            What food you order?
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        )
    }
}

export default EventForm;