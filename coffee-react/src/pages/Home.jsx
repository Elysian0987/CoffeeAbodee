import React from 'react';
// Assuming Home.css will stay in the same folder as Home.jsx (i.e., in 'pages')
import './Home.css';

// IMPORTS: Update these paths because Home.jsx is now in 'pages',
// so it needs to go up one level (..) to 'src' and then down into 'components'
import Info from '../components/Info';
import SignatureDrinks from '../components/SignatureDrinks';
import MerchAndBrews from '../components/MerchAndBrews';
import Footer from '../components/Footer';

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
          <><p>Once upon a time, in a lush green valley nestled amidst misty mountains, there existed a mystical coffee plantation known as Coffee Abode. Legends spoke of its magical beans, rumored to possess the power to transport anyone who tasted them to distant lands.</p>
            <p>Those who ventured into the depths of Coffee Abode were greeted by the aroma of freshly roasted coffee, swirling like wisps of enchantment through the air. Each sip of the brew whispered tales of far-off lands, of sun-kissed fields where coffee cherries ripened under the watchful gaze of ancient trees.</p>
            <p>From the emerald hills of Ethiopia to the sun-drenched shores of Colombia, the journey of Coffee Abode's beans was a voyage of discovery and wonder. Alongside skilled artisans and passionate farmers, we embarked on a quest to unearth the finest treasures of the coffee world.</p>
            <p>Our story is one of adventure, of mystery, and above all, of love—for the art of coffee-making, for the communities that nurture our beans, and for the discerning souls who seek solace in every sip.</p>
            <p>Come, join us on this exotic journey through the realms of coffee. Let each cup be a portal to new horizons, a vessel of dreams, and a testament to the enduring magic of Coffee Abode.</p>
            <p>In our quest for perfection, we traversed continents, forging partnerships with local farmers and cooperatives dedicated to sustainable agriculture. From the rugged landscapes of South America to the mist-shrouded highlands of East Africa, we sought out the rarest and most exquisite coffee varietals, each with its own distinct character and flavor profile.</p>
            <p>Back at our roastery, our master roasters meticulously craft each batch of beans, coaxing out the nuanced flavors and aromas that define our signature blends. With precision and care, we blend, roast, and grind, ensuring that every cup of Coffee Abode is a celebration of craftsmanship and dedication.</p>
            <p>But our story doesn't end there. Inspired by our love for coffee and our desire to share its magic with the world, we've created a space where coffee lovers can gather, connect, and indulge in the simple pleasure of a well-brewed cup.</p>
            <p>Welcome to Coffee Abode, where every sip is a journey, every bean is a story, and every moment is an opportunity to savor the extraordinary.</p></>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;