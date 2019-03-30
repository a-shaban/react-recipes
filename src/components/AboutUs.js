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
        Chris Rosetta – The Owner of the 100% Locally Owned best Independent Pizza Shop in Bendigo. 
        Has experienced it all from moving away from Eagle Boys, they decided to close up, 
        but Chris had other plans. 
        Join us for a timeline of the events explaining each area that Chris faced and overcame.
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
