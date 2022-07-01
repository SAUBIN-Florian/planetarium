import { useState } from "react";
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

const DB = {
    "0": "",
    "1": "Mercury, the smallest planet in our solar system and closest to the Sun is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
    "2": "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
    "3": "Earth, our home planet is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
    "4": "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was billions of years ago wetter and warmer, with a thicker atmosphere.",
    "5": "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
    "6": "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
    "7": "Uranus seventh planet from the Sun rotates at a nearly 90 degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
    "8": "Neptune the eighth and most distant major planet orbiting our Sun is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope."
  }

export default function Planets() {

  let [data, setData] = useState("0");

  const handleData = (e) => {
    setData(e.target.dataset.index);
  }

  return (
    <div className="planets">
      <div className="planets-content">
        <h3>FAR BEYOND</h3>
        <h1>Explore Now...</h1>
        <p>{DB[data]}</p>
      </div>
      <div className="planets-imgs">
        <div className="planets-wrapper">
          {/* hidden */}
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio1" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio2" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio3" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio4" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio5" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio6" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio7" />
          <input type="radio" className="hidden-radio" name="radio-btn" id="radio8" />
          {/* hidden */}
          <img src={Mercure} id="mercury" data-index="1" alt="Mercury" />
          <img src={Venus} id="venus" data-index="2" alt="Venus" />
          <img src={Terre} id="earth" data-index="3" alt="Earth" />
          <img src={Mars} id="mars" data-index="4" alt="Mars" />
          <img src={Jupiter} id="jupiter" data-index="5" alt="Jupiter" />
          <img src={Saturne} id="saturn" data-index="6" alt="Saturn" />
          <img src={Uranus} id="uranus" data-index="7" alt="Uranus" />
          <img src={Neptune} id="neptune" data-index="8" alt="Neptune" />
        </div>
      </div>
      <div className="planets-controls">
        <label htmlFor="radio1" data-index="1" className="clickable-controls" data-name="MERCURY" onClick={handleData}></label>
        <label htmlFor="radio2" data-index="2" className="clickable-controls" data-name="VENUS" onClick={handleData}></label>
        <label htmlFor="radio3" data-index="3" className="clickable-controls" data-name="EARTH" onClick={handleData}></label>
        <label htmlFor="radio4" data-index="4" className="clickable-controls" data-name="MARS" onClick={handleData}></label>
        <label htmlFor="radio5" data-index="5" className="clickable-controls" data-name="JUPITER" onClick={handleData}></label>
        <label htmlFor="radio6" data-index="6" className="clickable-controls" data-name="SATURN" onClick={handleData}></label>
        <label htmlFor="radio7" data-index="7" className="clickable-controls" data-name="URANUS" onClick={handleData}></label>
        <label htmlFor="radio8" data-index="8" className="clickable-controls" data-name="NEPTUNE" onClick={handleData}></label>
      </div>
    </div>
  )
}
