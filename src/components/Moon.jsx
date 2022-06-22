import { useEffect } from 'react';
import { initSlider } from '../services/slider';
import "../stylessheets/moon.scss";
// IMGS Imports:
import moon1 from '../assets/moon/moon_apollo_schema.jpg';
import moon2 from '../assets/moon/moon_buzz.jpg';
import moon3 from '../assets/moon/moon_cosmos_01.jpg';
import moon4 from '../assets/moon/moon_cosmos_02.jpg';
import moon5 from '../assets/moon/moon_firststep.jpg';
import moon6 from '../assets/moon/moon_flyer.jpg';
import moon7 from '../assets/moon/moon_footstep.jpg';
import moon8 from '../assets/moon/moon_michael.jpg';
import moon9 from '../assets/moon/moon_neil.jpg';


export default function Moon() {

  window.setInterval(() => {
    initSlider( ".element1");
  }, 2000)

  window.setInterval(() => {
    initSlider( ".element2");
  }, 2300)

  return (
    <div className="moon">
      <div className="slider-container">
        <div className="slider element1">
            <img className="moon-img" src={moon1} alt="Apollo 11 schema" />
            <img className="moon-img" src={moon2} alt="Buzz Aldrin" />
            <img className="moon-img" src={moon3} alt="Cosmonaut" />
            <img className="moon-img" src={moon4} alt="Cosmonaut" />
        </div>
        <div className="slider element2">
            <img className="moon-img" src={moon5} alt="Moon's first step" />
            <img className="moon-img" src={moon6} alt="July 1969 flyer" />
            <img className="moon-img" src={moon7} alt="Foot step" />
            <img className="moon-img" src={moon8} alt="Michael Collins" />
            <img className="moon-img" src={moon9} alt="Neil Armstrong" />
        </div>
      </div>
      <div className="moon-content">
        <h3>THE MOON</h3>
        <h1>Revive July 1969</h1>
        <p>Apollo 11 as you've never seen it before...</p>
      </div>
    </div>
  )
}
