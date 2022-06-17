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
      <video 
        className="herobanner-video"
        src={video}
        autoPlay
        muted
        loop
      >
      </video>
      <canvas className="herobanner-canvas" width="1300" height="750"></canvas>
    </div>
  )
}
