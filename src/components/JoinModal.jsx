import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as firebase from 'firebase';

import db from '../firebase/config';

class JoinModal extends Component {
    state = {
      show: false,
      name: '',
      food: '',
    }
    
  
    handleClose = () => {
      this.setState({ show: false, name: '' });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }

    handleSave = (e, joinID) => {
        if(this.state.name.length >= 3) {
            this.setState({ show: false });
            console.log(this.state.name);
            db.collection('events').doc(joinID).update(
              { participates: firebase.firestore.FieldValue.arrayUnion(`${this.state.name} Will eat: ${this.state.food}`) }
            );
        }
        // window.location.reload()
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Join
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Join event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="nameId">
                <Form.Label>Your Name</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="Enter name"
                      name="name"
                      value={this.state.neme} 
                      onChange={this.handleChange} 
                      isValid={this.state.name.length >= 3}
                      isInvalid={this.state.name.length < 3 && this.state.name.length !== 0}
                      required 

                  />
                </Form.Group>
                <Form.Group controlId="foodId">
                  <Form.Label>What you will be eat?</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="Enter what food you will be eat"
                      name="food"
                      value={this.state.food} 
                      onChange={this.handleChange} 
                      isValid={this.state.food.length >= 5}
                      isInvalid={this.state.food.length <= 5 && this.state.food.length !== 0}
                      required 
                  />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={(e) => this.handleSave(e, this.props.joinID)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default JoinModal;