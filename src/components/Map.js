import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: -36.717910, lng: 144.275700 },
    zoom: 16
  }
 
render() {
    return (
      <div style={{ height: '50vh', width: '100%'}}>
      <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDpO0hsyDrHWlszUolxjC9Hh8Uk9ahkGQw" }}
      defaultCenter={ this.props.center }
      defaultZoom={ this.props.zoom }>
      </GoogleMapReact>
    </div>
  
  );
}
}

