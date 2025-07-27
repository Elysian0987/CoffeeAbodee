import React from "react";

function Video() {
  return (
    <>
      <section className="video-section">
        <div className="video-container">
          <h2>A Glimpse of Coffee Abode</h2>
          <video controls width="100%">
            <source src={`${process.env.PUBLIC_URL}/img/coffee-shop-glimpse.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Experience the warm ambiance and delightful moments...</p>
        </div>
        <div className="audio-container">
          <h2>Coffee Shop Ambiance</h2>
          <audio controls>
            <source src={`${process.env.PUBLIC_URL}/img/coffee-shop-ambiance.mp4`} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
          <p>Immerse yourself in the soothing sounds...</p>
        </div>
      </section>
    </>
  );
}

export default Video;