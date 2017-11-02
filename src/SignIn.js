import React, { Component } from 'react';
import './App.css';
import {Materialize} from 'materialize-css';
import {Col,Card,Navbar,Tabs,Tab,Row,Input,Button, Icon} from 'react-materialize';

class SignIn extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar brand="<JACCA> talk"></Navbar>
        <Tabs className='tab-demo z-depth-1'>
          <Tab title="Sign In" active>
            <Card>
              <Row>
                <Input placeholder="Email" type="email" s={12} label="Your email" />
                <Input placeholder="Password" type="password" label="Password" s={12} />
                <Col s={12} className="center">
                  <Button large className="btn-primary" waves="orange" onClick={this.props['sign-in-call']}>Sign in</Button>
                </Col>
              </Row>
            </Card>
          </Tab>
          <Tab title="Sign with social media">
            <Card>
              <Row>
                <Col s={12} className="pad-col">
                  <Button large className="w100">Facebook</Button>
                </Col>
                <Col s={12} className="pad-col">
                  <Button large className="w100">Google +</Button>
                </Col>
              </Row>
            </Card>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SignIn;
