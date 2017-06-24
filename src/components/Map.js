import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';

class Map extends React.Component {
  static propTypes = {
    apiKey: PropTypes.string
  }

  static defaultProps = {
    zoom: 11,
    center: [34.062184, -118.248646]
  }

  render() {
    const style = {width: '100vw', height: '100vh'}
    return (
      <div style={style}>
        <GoogleMap
          center={this.props.center}
          zoom={this.props.zoom}
          bootstrapURLKeys={this.props.apiKey ? {key: this.props.apiKey}:''}
        >
          <div style={{width:'10px', height:'10px', backgroundColor:'red'}} lat={34.067305} lng={-118.246106} />
          <div style={{width:'10px', height:'10px', backgroundColor:'red'}} lat={34.167305} lng={-118.226106} />
        </GoogleMap>
      </div>
    )
  }
}

export default Map;
