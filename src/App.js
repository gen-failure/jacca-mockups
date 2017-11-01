import React, { Component } from 'react';
import './App.css';
import {Materialize} from 'materialize-css';
import {Container} from 'react-materialize';
import SignIn from './SignIn.js';

class App extends Component {
  render() {
    return (
      <Container>
        <SignIn></SignIn>
      </Container>
    );
  }
}

export default App;
