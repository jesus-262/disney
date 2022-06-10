import React from "react";
import "../estilo/Video.css";
function Video({ Video }) {
  return (
    <>
      <div>
        <video 
           autoPlay loop muted
          src={require(`../recursos/DISNEY-ELA-LG-1920x1080.mp4`)}
          type="video/mp4"
        ></video>
      </div>
    </>
  );
}
export default Video;
