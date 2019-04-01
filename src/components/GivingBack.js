import React from 'react';
import Frame from 'iframe-react';
import rfl from '../static/images/RFLWhite.png';
import bendigoeast from '../static/images/bendigoeast.png';
import Axedalesmall from '../static/images/Axedalesmall.png';
import camphill from '../static/images/camphill.png';
import falcons from '../static/images/falcons.png';
import maidengully from '../static/images/maidengullywhite.png';
import springgully from '../static/images/springgully.png';
import BendigoCity from '../static/images/BendigoCity.png';

const GivingBack = () => (
  <div className = "gbbody">
    <h1 >Giving back to the community</h1>
    <br/>
    <div className = "gbboxstyle">
     <br/>
      <h1 className = "gbboxheading">Relay for life | NFP | Cancer Council</h1>
      <br/>
      <img width = "30%" alt={rfl} src={rfl} />
      <br/>
      <br/>
      <br/>
      <iframe 
        width="800" 
        height="500" 
        src="https://www.youtube.com/embed/DW7uDSrZnfk" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <br/>
      <br/>
      <br/>
    </div>
    <br/>
    <hr/>
    <br/>
    <div className = "gbboxstyle ">
      <br/>
      <h1 className = "gbboxheading">Sports Clubs</h1>
      <div className = "gblogos">
        <figure>
          <img className="gbpics2" alt={springgully} src={springgully} />
          <figcaption>Spring Gully Soccer Club</figcaption>
        </figure>
        <figure>
          <img className="gbpics2" alt={falcons} src={falcons} />
          <figcaption>Falcons Baseball Club</figcaption>
        </figure>
        </div>
        <div className = "gblogos">
        <figure>
          <img className="gbpics2" alt={bendigoeast} src={bendigoeast} />
          <figcaption>Bendigo East Bowling Club</figcaption>
        </figure>
        <figure>
          <img className="gbpics2" alt={maidengully} src={maidengully} />
          <figcaption>Maiden Gully YCW Eagles Football & Netball Club</figcaption>
        </figure>
      </div>
    </div>
    <br/>
    <hr/>
    <br/>
    <div className = "gbboxstyle">
      <br/>
      <h1 className = "gbboxheading">Others</h1>
      <div className = "gblogos">
        <figure>
          <img className="gbpics2" alt={Axedalesmall} src={Axedalesmall} />
          <figcaption>Axedale Quick Shear</figcaption>
        </figure>
        <figure>
          <img className="gbpics2" alt={camphill} src={camphill} />
          <figcaption>Camphill Primary School</figcaption>
        </figure>
      </div>
    </div>
    <br/>
    <hr/>
    <br/>
    <h1 className = "gbboxheading">Join Our Family</h1>
    <h3 className ="gbtext2">
      Eagle Pizzas has been giving back to the community for over 14 years. Find how we can help you become a part of the family. Contact us today!
    </h3>
    <button className="button-element btn-color pointer">
      <p className="btn-text">ENQUIRE TODAY</p>
    </button>
  </div>
);

export default GivingBack;
