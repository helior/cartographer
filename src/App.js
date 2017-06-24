import getParameterByName from './utils/getParameterByName';
import React, { Component } from 'react';
import UserInput from './components/UserInput';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="user-input">
          <Col>
            <UserInput searchUrl={getParameterByName('searchUrl')} googleApiKey={getParameterByName('googleApiKey')} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
