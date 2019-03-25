import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
      
      {/* <iframe src={`https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d51144.47423307726!2d144.26378889635512!3d-36.757859702866405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m5!1s0x6ad759a195ff01df%3A0xa04bd30d98b23a5b!2sEagle+Boys+Pizza+Bendigo%2C+91-97+McIvor+Hwy%2C+East+Bendigo+VIC+3550!3m2!1d-36.7579336!2d144.2988083!4m4!1s0x6ad759a195ff01df%3A0xa04bd30d98b23a5b!3m2!1d-36.7579336!2d144.2988083!5e0!3m2!1sen!2sau!4v1553066814897`} 
      width={"600"} height={"450"} frameborder={"0"} style={"border:0"} allowfullscreen></iframe> */}
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

