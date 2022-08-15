import React from "react";
import { useEffect } from 'react';
import video from '../assets/herobanner_video.mp4';
import { initCanvas } from "../services/canvas";
import { useInView } from 'react-intersection-observer';
import "../stylessheets/herobanner.scss";

export default function HeroBanner() {

  const { ref: elementRef, inView: elementIsVisible } = useInView({threshold: 0.1, triggerOnce: true});

  useEffect(() => {
    initCanvas(".herobanner-canvas", ".herobanner-video");
  }, [])

  return (
    <div className="herobanner">
      <div className="herobanner-wrapper">
        <video 
          className="herobanner-video"
          src={video}
          autoPlay
          muted
          loop
        >
        </video>
        <canvas className="herobanner-canvas"></canvas>
        <div className="herobanner-content" ref={elementRef}>
          <h1 className={elementIsVisible ? "animateTitle" : ""}>Start a <br />new journey <br />with <span className={elementIsVisible ? "animateTitleSpan" : ""}>Planetarium</span></h1>
          <p className={elementIsVisible ? "animateH3" : ""}>
            Want to see beyond the horizon ? Take a seat pilot,<br />
            we are going on an incredible voyage !
          </p>
        </div>
      </div>
    </div>
  )
}
