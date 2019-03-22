import './App.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import EventForm from './components/EventForm';
import EventsList from './components/EventsList';

class App extends Component {

  render() {
    return (
        <>
          <header><div id="header__text"><span>Order Food Together</span></div><div id="logo"></div></header>
          {/* <nav><a href="#event-form">Create own food event</a><a href="#event-list">Join existing event</a></nav> */}
          <Container>             
                <h1 id='event-list'>Events</h1>
                <EventsList/>
                <h1 id='event-form'>Create own food event </h1>
                <EventForm/>            
          </Container>
          {/* <footer><h3>Maciej B. All rights reserved </h3></footer> */}
        </>              
    );
  }
}

export default App;
