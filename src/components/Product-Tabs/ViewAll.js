import React from 'react';
import ChickTorte from '../../static/images/Sides/chicken-tortellini.jpg';
import Lasagne from '../../static/images/Sides/lasagne.jpg';
import PorkRibs from '../../static/images/Sides/pork-ribs.jpg';
import SpagBolo from '../../static/images/Sides/spaghetti-bolognaise.jpg';
import VegLasa from '../../static/images/Sides/vegetable-lasagne.jpg';
import Wings1 from '../../static/images/Sides/wings-1.jpg';
import Wings2 from '../../static/images/Sides/wings-2.jpg';

const Sides = () => (
  <div className="pb4 px4">
    <p>OUR SIDES</p>
    <div className="sides">
      <img className="sides-pics" alt={ChickTorte} src={ChickTorte} />
      <img className="sides-pics" alt={Lasagne} src={Lasagne} />
      <img className="sides-pics" alt={PorkRibs} src={PorkRibs} />
      <img className="sides-pics" alt={SpagBolo} src={SpagBolo} />
      <img className="sides-pics" alt={VegLasa} src={VegLasa} />
      <img className="sides-pics" alt={Wings1} src={Wings1} />
      <img className="sides-pics" alt={Wings2} src={Wings2} />
    </div>
  </div>
);

export default Sides;
