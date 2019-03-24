import './App.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {RenderContextProvider} from './context';
import Header from './components/Header';
import FormEvent from './components/FormEvent';
import ListEvents from './components/ListEvent';
import Navigation from './components/Navigation'; 
import TestContextComponent from './components/TestContextComponent';

class App extends Component {

  render() {
    return (
      <>
        <RenderContextProvider>
        <Router>
          <div>
            <Header/>
            <Container>
              <Navigation />
                  <Route exact path="/" component={FormEvent} />
                  <Route path="/events/" component={ListEvents} />
                  <Route path="/create" component={FormEvent} />
            </Container>
          </div>
        </Router>
        
          {/* <TestContextComponent/> */}
        </RenderContextProvider>
      </>              
    );
  }
}

export default App;
