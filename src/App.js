import getParameterByName from './utils/getParameterByName';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import UserInput from './components/UserInput';
import Map from './components/Map';
import Placeholder from './components/Placeholder';

class App extends Component {
  static propTypes = {
    searchUrl: PropTypes.string,
    googleApiKey: PropTypes.string,
    isLoading: PropTypes.bool,
    markers: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    searchUrl: getParameterByName('searchUrl'),
    googleApiKey: getParameterByName('googleApiKey'),
    isLoading: false,
    markers: []
  }

  hasRequiredInput() {
    return this.props.searchUrl && this.props.googleApiKey;
  }
  
  hasMarkers() {
    return this.props.markers.length > 1;
  }

  componentDidMount() {
    if (this.hasRequiredInput()) {

    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="input-row">
          <Col>
            <UserInput searchUrl={this.props.searchUrl} googleApiKey={this.props.googleApiKey} />
          </Col>
        </Row>
        <Row className="map-row">
          <Col>
           {this.hasRequiredInput() ?
           <Map apiKey={this.props.googleApiKey}/> :
           <Placeholder />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
