import './App.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import EventForm from './components/EventForm';
import EventsList from './components/EventsList';
import Navigation from './components/Navigation'; 

class App extends Component {

  render() {
    return (
        <>
            <Router>
            <div>           

          <header><div id="header__text"><span>Order Food Together</span></div><div id="logo"></div></header>
          <Container> 
            <Navigation/>
            {/* <h1 id='event-list'>Events</h1> */}
            <Route path="/events/" component={EventsList}/>
            {/* <h1 id='event-form'>Create own food event </h1> */}
            <Route path="/create/" component={EventForm}/> 
          </Container>
          {/* <footer><h3>Maciej B. All rights reserved </h3></footer> */}
          </div>

          </Router>              

        </>              
    );
  }
}

export default App;
