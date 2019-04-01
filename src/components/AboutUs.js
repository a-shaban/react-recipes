import React from 'react';
import pic1 from '../static/images/about-us/pic-1.jpg';
import pic2 from '../static/images/about-us/pic-2.jpg';
import pic3 from '../static/images/about-us/pic-3.jpg';
import pic4 from '../static/images/about-us/pic-4.jpg';
import pic5 from '../static/images/about-us/pic-5.jpg';
import pic6 from '../static/images/about-us/pic-6.jpg';


const AboutUs = () => (
  <div>
    <div className = "aboutustext">
      <h1>We are Eagle Pizzas </h1>
      <br/>
      <h3>
        Chris Rosetta & Amy Rosetta – The Owners of the 100% Locally Owned
        best Independent Pizza Shop in Bendigo. They have experienced it all
        since moving away from Eagle Boys. Instead of going under with the
        failed Franchisor, the decision to go independent was made. 
        <br/>
        <br/>
        Join us for a timeline of the events explaining each challenge that Chris &
        Amy faced and overcame.
      </h3>
    </div>
    <hr/>
    <br/>
    <div>
      <img className="about-us-pics" alt={pic1} src={pic1} />
      <img className="about-us-pics" alt={pic2} src={pic2} />
      <img className="about-us-pics" alt={pic3} src={pic3} />
      <img className="about-us-pics" alt={pic4} src={pic4} />
      <img className="about-us-pics" alt={pic5} src={pic5} />
      <img className="about-us-pics" alt={pic6} src={pic6} />
    </div>
  </div>
);

export default AboutUs;
