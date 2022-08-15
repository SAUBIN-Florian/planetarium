import React from "react";
import { useState, useEffect } from 'react';
import '../stylessheets/toast.scss';


export default function Toast() {

  const [isTime, setIsTime] = useState(false);
  const [isSub, setIsSub] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect( () => {
    setTimeout(() => {
      setIsTime(true);
    }, 5000);
  }, [])

  const removeToast = () => {
    setIsTime(false);
    setAnimate(true);
  }

  const timedRemoveToast = () => {
    setIsSub(true);
    setAnimate(true);
    setTimeout(() => {
      setIsTime(false);
    }, 1000);
  }

  return (
    <>
      {isTime && (
        <div className={`toast ${animate && 'exit-animate'}`}>
          <span className="toast-close" onClick={removeToast}>&#128939;</span>
          <h3 className="toast-title">SUBSCRIBE NOW !</h3>
          <p className="toast-para">Get the newletter
            and participate to our space program...
          </p>
          {!isSub && <button className="toast-sub-btn" onClick={timedRemoveToast}>Subscribe</button>}
          {isSub && <button className="toast-sub-btn done">&#10004;</button>}
        </div>
      )}
    </>
  )
}
