import React from 'react';
import './Home.css';
import Info from './Info';
import SignatureDrinks from './SignatureDrinks';
import MerchAndBrews from './MerchAndBrews';
import Footer from './Footer'; 

function Home() {
  return (
    <>
      <header>
        <img src={process.env.PUBLIC_URL + '/img/LOGO.png'} alt="Logo" />
        <h1>Coffee Abode</h1>
      </header>

      <nav>
        <a href="/">Home</a> |
        <a href="/menu">Menu</a> |
        <a href="/merch">Merchandise</a> |
        <a href="/login">Login</a>
      </nav>

      <Info />

      <SignatureDrinks />

      <MerchAndBrews />

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

      <div className="Story">
        <h2>Our Coffee Story</h2>
        <p>Learn about our journey, commitment to quality...</p>
        <a href="/" id="read-our-story-btn" className="read-more-btn">Read Our Story</a>
        <div id="coffee-story">
          <p>An Exotic Journey through Coffee...</p>
          {/* story paragraphs truncated for brevity */}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;