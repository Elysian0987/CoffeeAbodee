import React, { useState } from "react";
import './Home.css'; // Assuming you have a CSS file for styling

function Story() {
  // State to manage the visibility of the full story content
  const [showFullStory, setShowFullStory] = useState(false);

  // Function to toggle the visibility of the full story
  const toggleStory = () => {
    setShowFullStory(!showFullStory);
  };

  return (
    // Main container for the story, now spanning full width of its parent
    // Using flexbox to center content vertically and horizontally
    <div className="Story font-inter relative text-white w-full min-h-screen flex flex-col justify-center items-center overflow-y-auto px-4"> {/* Added px-4 for default horizontal padding */}
      <h2 className="text-3xl font-bold mb-4 text-center">Our Coffee Story</h2>
      
      {/* Short introductory paragraph, always visible */}
      <p className="mb-4 leading-relaxed text-center max-w-xl">
        Learn about our journey, commitment to quality, and the passion that goes into every bean.
      </p>

      {/* Button when story is collapsed */}
      {!showFullStory && (
        <button
          onClick={toggleStory}
          className="read-more-btn glass-button font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 mb-6"
        >
          Our Journey ..
        </button>
      )}

      {/* Full story content, conditionally rendered */}
      {showFullStory && (
        <div id="coffee-story" className="space-y-4 animate-fade-in text-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 max-w-4xl w-full"> {/* Adjusted responsive padding */}
          <p className="font-semibold text-lg">An Exotic Journey through Coffee...</p>
          <p>Once upon a time, in a lush green valley nestled amidst misty mountains, there existed a mystical coffee plantation known as Coffee Abode. Legends spoke of its magical beans, rumored to possess the power to transport anyone who tasted them to distant lands.</p>
          <p>Those who ventured into the depths of Coffee Abode were greeted by the aroma of freshly roasted coffee, swirling like wisps of enchantment through the air. Each sip of the brew whispered tales of far-off lands, of sun-kissed fields where coffee cherries ripened under the watchful gaze of ancient trees.</p>
          <p>From the emerald hills of Ethiopia to the sun-drenched shores of Colombia, the journey of Coffee Abode's beans was a voyage of discovery and wonder. Alongside skilled artisans and passionate farmers, we embarked on a quest to unearth the finest treasures of the coffee world.</p>
          <p>Our story is one of adventure, of mystery, and above all, of love—for the art of coffee-making, for the communities that nurture our beans, and for the discerning souls who seek solace in every sip.</p>
          <p>Come, join us on this exotic journey through the realms of coffee. Let each cup be a portal to new horizons, a vessel of dreams, and a testament to the enduring magic of Coffee Abode.</p>
          <p>In our quest for perfection, we traversed continents, forging partnerships with local farmers and cooperatives dedicated to sustainable agriculture. From the rugged landscapes of South America to the mist-shrouded highlands of East Africa, we sought out the rarest and most exquisite coffee varietals, each with its own distinct character and flavor profile.</p>
          <p>Back at our roastery, our master roasters meticulously craft each batch of beans, coaxing out the nuanced flavors and aromas that define our signature blends. With precision and care, we blend, roast, and grind, ensuring that every cup of Coffee Abode is a celebration of craftsmanship and dedication.</p>
          <p>But our story doesn't end there. Inspired by our love for coffee and our desire to share its magic with the world, we've created a space where coffee lovers can gather, connect, and indulge in the simple pleasure of a well-brewed cup.</p>
          <p>Welcome to Coffee Abode, where every sip is a journey, every bean is a story, and every moment is an opportunity to savor the extraordinary.</p>

          {/* Button when story is expanded, placed at the bottom of the story content */}
          <button
            onClick={toggleStory}
            className="read-more-btn glass-button font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 mt-8"
          >
            Demnn
          </button>
        </div>
      )}

      {/* Custom CSS for background image, colors, and specific padding */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Combined .Story styles for full screen and overlay */
        .Story {
            background-color: rgba(73, 55, 55, 0.7); /* Overlay color */
            color: #fff;
            padding: 1em; /* Default padding, adjusted by Tailwind px-4 */
            text-align: center;
            position: relative;
            width: 100%; /* Changed from 100vw to 100% to prevent horizontal overflow */
            min-height: 100vh; /* Minimum full viewport height */
            box-sizing: border-box; /* Include padding in the element's total width/height */
            /* Flexbox properties for centering content */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow-y: auto; /* Allow scrolling if content exceeds viewport height */
            overflow-x: hidden; /* Explicitly hide horizontal overflow */
        }

        .Story::before {
            content: '';
            // background-image: url("https://placehold.co/1920x1080/493737/ffffff?text=Coffee+Background"); /* Placeholder image for background */
            background-position: center;
            background-size: cover; /* Ensure image covers the area */
            background-repeat: no-repeat;
            background-attachment: fixed; /* Fixed background scroll effect */
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1; /* Puts the background behind the content */
        }
        
        /* Glass effect for buttons */
        .glass-button {
          background-color: rgba(255, 255, 255, 0.15); /* Semi-transparent white */
          backdrop-filter: blur(10px); /* Glass effect */
          -webkit-backdrop-filter: blur(10px); /* Safari compatibility */
          border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border */
          color: #fff; /* Ensure text is white */
          text-shadow: 0 0 5px rgba(0,0,0,0.5); /* Subtle text shadow for readability */
        }
        .glass-button:hover {
          background-color: rgba(255, 255, 255, 0.25); /* Slightly more opaque on hover */
        }

        /* Animation for fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Story;
