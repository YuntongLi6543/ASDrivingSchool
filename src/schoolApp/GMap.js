import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class GMap extends React.Component {

  render() {
    return (
       <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlxUV4Q56sN63RhTJtGnYbw0F8XV08m9E'
})(GMap)