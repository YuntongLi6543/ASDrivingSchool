import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default class ContactUs extends Component {

	static defaultProps = {
	    center: {
	      lat: 43.78,
	      lng: -79.26
	    },
	    zoom: 11
	  };
		 

    render() {
        return (
            // <div>ContactUs page</div>
            <div style={{ height: '100vh', width: '100%' }}>
		        <GoogleMapReact
			        defaultCenter={this.props.center}
			        defaultZoom={this.props.zoom}
			      >
			        <AnyReactComponent 
			          lat={43.788464} 
			          lng={-79.268107} 
			          text={'AS DRIVING SCHOOL'} 
			        />
			      </GoogleMapReact>
		    </div>
            

        );
    }
}