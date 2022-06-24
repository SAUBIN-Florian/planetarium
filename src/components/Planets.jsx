import React from 'react';
import "../stylessheets/planets.scss";

// IMPORTS PLANETS
import Mercure from '../assets/planets/1_Mercure.png';
import Venus from '../assets/planets/2_Venus.png';
import Terre from '../assets/planets/3_Terre.png';
import Mars from '../assets/planets/4_Mars.png';
import Jupiter from '../assets/planets/5_Jupiter.png';
import Saturne from '../assets/planets/6_Saturne.png';
import Uranus from '../assets/planets/7_Uranus.png';
import Neptune from '../assets/planets/8_Neptune.png';


export default function Planets() {
  return (
    <div className="planets">
      <div className="planets-content">
        <h1>Explore Now...</h1>
        <p className="planets-disclaimer">*Scales and distances not representative</p>
      </div>
      <div className="planets-imgs">
        <img src={Mercure} id="mercury" data-width="100px" alt="Mercury" />
        <img src={Venus} id="venus" data-width="100" alt="Venus" />
        <img src={Terre} id="earth" data-width="100" alt="Earth" />
        <img src={Mars} id="mars" data-width="100" alt="Mars" />
        <img src={Jupiter} id="jupiter" data-width="100" alt="Jupiter" />
        <img src={Saturne} id="saturn" data-width="100" alt="Saturn" />
        <img src={Uranus} id="uranus" data-width="100" alt="Uranus" />
        <img src={Neptune} id="neptune" data-width="100" alt="Neptune" />
      </div>
    </div>
  )
}
