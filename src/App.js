import './App.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EventForm from './components/EventForm';
import EventCard from './components/EventCard';

class App extends Component {
  render() {
    return (
        <>
          <header><div id="header__text"><span>Order Food together</span></div><div id="logo"></div></header>
          <Container>
            <Row>
              <Col>
                <Row><h1>Create own food event </h1></Row>
                <Row><EventForm/></Row>
              </Col>
              <Col>
                <Row><Col><h1>Join existing event</h1></Col></Row>
                <Row><Col><EventCard/></Col></Row>
              </Col>
            </Row>
          </Container>
        </>              
    );
  }
}

export default App;
