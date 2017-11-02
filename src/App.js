import React, { Component } from 'react';
import './App.css';
import {Materialize} from 'materialize-css';
import {Container} from 'react-materialize';
import SignIn from './SignIn';
import LoggedWindow from './LoggedWindow';

class App extends Component {
  constructor() {
    super();
    this.state = {logged : false};
  }

  logIn() {
    this.setState({ logged : true });
  }

  logOut() {
    this.setState({ logged : false });
  }

  render() {
    return (
      <Container>
        {this.state.logged
          ? <LoggedWindow></LoggedWindow>
          : <SignIn sign-in-call={this.logIn.bind(this)}></SignIn>
        }
      </Container>
    );
  }
}

export default App;
