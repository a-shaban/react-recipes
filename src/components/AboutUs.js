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
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Molestie nunc non blandit massa. Arcu non sodales neque sodales. Risus nullam eget felis eget nunc lobortis mattis.
        just use Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Molestie nunc non blandit massa. Arcu non sodales neque sodales. Risus nullam eget felis eget nunc lobortis mattis.
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
