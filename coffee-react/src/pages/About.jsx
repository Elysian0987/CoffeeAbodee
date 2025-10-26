import React from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      
      <div className="about-container">
        <section className="about-hero">
          <h1>About Coffee Abode</h1>
          <p className="tagline">Where Every Cup Tells a Story</p>
        </section>

        <section className="about-section" id="coffeehouse">
          <div className="about-content">
            <h2>Our Coffeehouse</h2>
            <p>
              Welcome to Coffee Abode, a sanctuary for coffee lovers and a haven for those seeking 
              exceptional brews in a warm, inviting atmosphere. Our coffeehouse is more than just a 
              place to grab your daily caffeine fix—it's a destination where community, quality, and 
              passion come together.
            </p>
            <p>
              Every corner of Coffee Abode has been thoughtfully designed to provide comfort and inspiration. 
              From our carefully curated seating areas perfect for catching up with friends, to quiet nooks 
              ideal for focused work or reading, we've created spaces that adapt to your needs.
            </p>
            <p>
              Our baristas are skilled artisans who take pride in every cup they craft. Using state-of-the-art 
              equipment and time-honored techniques, they transform premium beans into liquid perfection, 
              ensuring that each visit to Coffee Abode is a memorable experience.
            </p>
          </div>
          <div className="about-image-placeholder">
            <img src={`${process.env.PUBLIC_URL}/img/Coffee1.jpg`} alt="Coffee Abode Interior" />
          </div>
        </section>

        <section className="about-section reverse" id="company">
          <div className="about-image-placeholder">
            <img src={`${process.env.PUBLIC_URL}/img/Coffee2.jpg`} alt="Our Team" />
          </div>
          <div className="about-content">
            <h2>Our Company</h2>
            <p>
              Founded with a simple mission—to serve the world's finest coffee with integrity and 
              heart—Coffee Abode has grown from a small local café into a beloved destination for 
              coffee enthusiasts.
            </p>
            <p>
              We believe in doing business responsibly. Our commitment extends beyond our doors to 
              the farmers who grow our beans, the communities we serve, and the environment we all share. 
              We source our coffee through direct trade relationships, ensuring fair compensation for 
              growers and supporting sustainable farming practices.
            </p>
            <p>
              Transparency, quality, and social responsibility are the pillars of our business. We're 
              proud to be a company that not only serves great coffee but also contributes positively 
              to the world. From our recyclable packaging to our community outreach programs, every 
              decision we make reflects our values.
            </p>
          </div>
        </section>

        <section className="about-section" id="heritage">
          <div className="about-content">
            <h2>Our Heritage</h2>
            <p>
              The story of Coffee Abode begins in the misty highlands of Ethiopia, where coffee itself 
              was discovered centuries ago. Inspired by the ancient coffee ceremonies and the rich traditions 
              of coffee cultures around the world, our founders set out to create a place that honors this 
              incredible heritage.
            </p>
            <p>
              We draw inspiration from the great coffeehouses of history—from the intellectual salons of 
              18th century Europe to the vibrant coffee ceremonies of East Africa. These traditions of 
              gathering, conversation, and contemplation over a cup of coffee are woven into the fabric 
              of Coffee Abode.
            </p>
            <p>
              Our menu celebrates coffee's global journey, featuring beans from legendary growing regions: 
              the birthplace of coffee in Ethiopia, the volcanic soils of Central America, the lush 
              mountains of Colombia, and the diverse landscapes of Indonesia. Each origin brings its own 
              character, history, and flavor profile to your cup.
            </p>
            <p>
              At Coffee Abode, we're not just serving coffee—we're preserving and sharing a heritage 
              that spans continents and centuries, one carefully crafted cup at a time.
            </p>
          </div>
          <div className="about-image-placeholder">
            <img src={`${process.env.PUBLIC_URL}/img/Coffee3.jpg`} alt="Coffee Heritage" />
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We never compromise on the quality of our beans, our brews, or our service.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We create spaces where people connect, collaborate, and feel at home.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We're committed to environmental stewardship and ethical sourcing practices.</p>
            </div>
            <div className="value-card">
              <h3>Passion</h3>
              <p>Every cup we serve is crafted with love, expertise, and dedication.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
