import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const greatPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-36.717910, 144.275700 )'
}

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
      <div style={greatPlaceStyle}>
      {this.props.text}
    </div>
    </div>
  
  );
}
}

