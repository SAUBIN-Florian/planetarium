import React from "react";
import { useEffect } from 'react';
import { initSlider } from '../services/slider';
import { useInView } from 'react-intersection-observer';
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

  const { ref: elementRef, inView: elementIsVisible } = useInView({threshold: 0, triggerOnce: true});

  useEffect(() => {
    initSlider( ".element1", 4000);
    initSlider( ".element2", 5000);
  }, [])

  return (
    <div className="moon">
      <div className="slider-container">
        <div className="slider element1">
            <img className="moon-img" src={moon1} data-view="show" alt="Apollo 11 schema" />
            <img className="moon-img" src={moon2} data-view="hidden" alt="Buzz Aldrin" />
            <img className="moon-img" src={moon3} data-view="hidden" alt="Cosmonaut" />
            <img className="moon-img" src={moon4} data-view="hidden" alt="Cosmonaut" />
        </div>
        <div className="slider element2">
            <img className="moon-img" src={moon5} data-view="show" alt="Moon's first step" />
            <img className="moon-img" src={moon6} data-view="hidden" alt="July 1969 flyer" />
            <img className="moon-img" src={moon7} data-view="hidden" alt="Foot step" />
            <img className="moon-img" src={moon8} data-view="hidden" alt="Michael Collins" />
            <img className="moon-img" src={moon9} data-view="hidden" alt="Neil Armstrong" />
        </div>
      </div>
      <div className="moon-content" ref={elementRef}>
        <h3 className={elementIsVisible ? "animateH3" : ""}>THE MOON</h3>
        <h1 className={elementIsVisible ? "animateTitle" : ""}>Relive July 1969</h1>
        <p className={elementIsVisible ? "animatePara" : ""}>Apollo 11 as you've never seen it before...</p>
      </div>
    </div>
  )
}
