import getParameterByName from '../lib/utils/getParameterByName';
import scrapeSearchUrl from '../lib/scrapeSearchUrl';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import UserInput from './UserInput';
import Map from './Map';
import Placeholder from './Placeholder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUrl: getParameterByName('searchUrl'),
      googleApiKey: getParameterByName('googleApiKey'),
      isLoading: false,
      markers: []
    }
  }

  hasRequiredInput() {
    return this.state.searchUrl && this.state.googleApiKey;
  }

  hasMarkers() {
    return this.state.markers.length > 0;
  }

  componentDidMount() {
    if (this.hasRequiredInput()) {
      this.setState({isLoading: true});
      // scrapeSearchUrl(this.state.searchUrl)
      //   .then(results => {
      //     console.log(results);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   })

      // HTTP request...
      // then( set marker state )

      // DEVELOPMENT OF THIS PROJECT HALTED BECAUSE I REALIZE I CAN'T MAKE
      // CROSS-ORIGIN API REQUESTS FROM THE BROWSER. WILL NEED TO REVISIT WITH A
      // SERVER BACKEND.
    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="input-row">
          <Col>
            <UserInput searchUrl={this.state.searchUrl} googleApiKey={this.state.googleApiKey} />
          </Col>
        </Row>
        <Row className="map-row">
          <Col>
           {this.hasRequiredInput() && this.hasMarkers() ?
           <Map apiKey={this.state.googleApiKey} markers={this.state.markers} /> :
           <Placeholder isLoading={this.state.isLoading} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
