import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="searchUrl">Search URL</Label>
                <Input type="text" name="searchUrl" id="searchUrl" placeholder="http://example.com/?q=123" />
              </FormGroup>
            </Form>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default App;
