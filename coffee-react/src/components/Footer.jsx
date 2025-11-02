import React from 'react';
import './Home.css'; // or Footer.css if you split CSS

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="/about#coffeehouse">Coffeehouse</a></li>
            <li><a href="/about#company">Our Company</a></li>
            <li><a href="/about#heritage">Our Heritage</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Responsibility</h3>
          <ul>
            <li><a href="/">Community</a></li>
            <li><a href="/">Ethical Sourcing</a></li>
            <li><a href="/">Environmental Stewardship</a></li>
            <li><a href="/">Diversity</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/privacy-terms#privacy">Privacy Policy</a></li>
            <li><a href="/rewards#rewards-day">CoffeeAbode Rewards Day Offer</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/rewards#gifting">Season's Gifting</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy-terms#terms">Terms and Conditions</a></li>
            <li><a href="/privacy-terms#app-terms">CoffeeAbode India Mobile App Terms of Use</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>SOCIAL MEDIA</h3>
          <ul className="social-media-icons">
            <li><a href="/"><img src={`${process.env.PUBLIC_URL}/img/instagram-icon.png`} alt="Instagram" /></a></li>
            <li><a href="/"><img src={`${process.env.PUBLIC_URL}/img/facebook-icon.png`} alt="Facebook" /></a></li>
            <li><a href="/"><img src={`${process.env.PUBLIC_URL}/img/twitter-icon.png`} alt="Twitter" /></a></li>
          </ul>
        </div>
      </div>

      <hr />
      <br />
      <div className="footer-bottom">
        &copy; 2024 Coffee Abode. All rights reserved. | Designed with ♡ by <a href="https://samrudhib-portfolio.web.app/">Samrudhi B</a>
      </div>
    </footer>
  );
}

export default Footer;
