import React from 'react';
import { Slide } from 'react-slideshow-image';
import Deal1 from '../static/images/deals-images/deal1.jpg';
import Deal2 from '../static/images/deals-images/deal2.jpg';
import Deal3 from '../static/images/deals-images/deal3.jpg';

const slideImages = [
  Deal1,
  Deal2,
  Deal3,
];

const properties = {
  duration: 8000,
  transitionDuration: 0,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
  return (
    <Slide {...properties}>

      <div className="container pointer">
        <p className="slide-desc sm-col sm-col-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Et netus et malesuada fames ac. Molestie nunc non blandit massa. 
          Arcu non sodales neque sodales. Risus nullam eget felis eget nunc lobortis mattis.
        </p>
        <img className="deal-images sm-col sm-col-7 " alt={slideImages[0]} src={slideImages[0]} />
      </div>

      <div className="container pointer">
        <p className="slide-desc sm-col sm-col-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Et netus et malesuada fames ac. Molestie nunc non blandit massa. 
          Arcu non sodales neque sodales. Risus nullam eget felis eget nunc lobortis mattis.
        </p>
        <img className="deal-images sm-col sm-col-7" alt={slideImages[1]} src={slideImages[1]} />
      </div>

      <div className="container pointer">
        <p className="slide-desc sm-col sm-col-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Et netus et malesuada fames ac. Molestie nunc non blandit massa. 
          Arcu non sodales neque sodales. Risus nullam eget felis eget nunc lobortis mattis.
        </p>
        <img className="deal-images sm-col sm-col-7" alt={slideImages[2]} src={slideImages[2]} />
      </div>

    </Slide>
  )
}

export default Slideshow;