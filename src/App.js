import React, { Component } from 'react';
import './App.css';

import AddFormButton from './components/AddFormButton';
import AddForm from './components/AddForm';
import ShowOrdersButton from './components/ShowOrdersButton';
import Orders from './components/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <AddFormButton/>
        <ShowOrdersButton/>
        <AddForm/>
        <Orders/>
      </div>      
    );
  }
}

export default App;
