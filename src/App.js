import getParameterByName from './utils/getParameterByName';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

class App extends Component {
  getSearchUrl() {
    return getParameterByName('searchUrl');
  }
  getGoogleApiKey() {
    return getParameterByName('googleApiKey');
  }

  render() {
    return (
      <Container fluid>
        <Row className="user-input">
          <Col>
            <Form inline className="m-2">
              <FormGroup>
                <Label for="searchUrl" hidden>Search URL</Label>
                <Input type="text" name="searchUrl" id="searchUrl" placeholder="Search URL" defaultValue={this.getSearchUrl()} />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="googleApiKey" hidden>Google API Key</Label>
                <Input type="text" name="googleApiKey" id="googleApiKey" placeholder="Google API Key" defaultValue={this.getGoogleApiKey()} />
              </FormGroup>
              {' '}
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
