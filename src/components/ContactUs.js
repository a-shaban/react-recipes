import React from 'react';
import Map from './Map';
import location from '../static/images/contactus-icons/location.png';
import phone from '../static/images/contactus-icons/phone-call.png';
import message from '../static/images/contactus-icons/message.png';
import fblogo from '../static/images/contactus-icons/facebook-logo.png';


const AboutUs = () => (
  <div className = "container">
    <div className = "contactusheading">
      <h1>Get in touch with us </h1>
    </div>
    <br/>
    <div className = "contactusinfo">
      <div className ="contactusdata">
        <div className = "contactusicons">
          <img className = "contactusimage" alt={location} src={location} />
          <label className = "contactusicontext">
            <h3>Visit us</h3> 
            91-97 Mcivor RD,<br/>
            Bendigo, VIC, 3660<br/>
          </label>
        </div>
        <br/>
        <br/>
        <div className = "contactusicons">
          <img className = "contactusimage" alt={phone} src={phone} />
          <label>
            <h3>Call us</h3> 
            00000000000<br/>
          </label>
        </div>
        <br/>
        <br/>
        <div className = "contactusicons">
          <img className = "contactusimage" alt={message} src={message} />
          <label>
            <h3>Email us</h3> 
            pizza@shop.com<br/>
          </label>
          </div>
        <br/>
        <br/>
        <div className = "contactusicons">
          <img className = "contactusimage" alt={fblogo} src={fblogo} />
          <label>
            <h3>Like us on Facebook</h3>
          </label>
        </div>
      </div>
      <div>
        <form action="" className = "contactusform">
          <input type="text" className = "contactustext" name="Name" value="Name"/>
          <br/>
          <input type="text" className = "contactustext" name="Email" value="Email Address"/>
          <br/>
          <input type="text" className = "contactustext" name="Subject" value="Subject"/>
          <br/>
          <textarea name="Message" className = "contactustext" rows="10" >Message here</textarea>
          <br/><br/>
          <input type="submit" value="Submit" className = "contactusbutton"/>
        </form> 
      </div>
    </div>
    <div className="mapDiv">
      <Map/>
    </div>
    <br/>
    <br/>
    <hr/>
  </div>
);

export default AboutUs;
