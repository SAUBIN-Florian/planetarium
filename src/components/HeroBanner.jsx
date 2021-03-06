import { useEffect } from 'react';
import video from '../assets/herobanner_video.mp4';
import { initCanvas } from "../services/canvas";
import "../stylessheets/herobanner.scss";

export default function HeroBanner() {

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
        <div className="herobanner-content">
          <h1>Start a <br />new journey <br />with <span>Planetarium</span></h1>
          <p>
            Want to see beyond the horizon ? Take a seat pilot,<br />
            we are going on an incredible voyage !
          </p>
        </div>
      </div>
    </div>
  )
}
