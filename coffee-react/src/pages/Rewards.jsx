import React from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Rewards.css';

const Rewards = () => {
  return (
    <div>
      <Header />
      
      <div className="rewards-container">
        <section className="rewards-hero">
          <h1>Rewards & Special Offers</h1>
          <p className="tagline">Enjoy More, Save More</p>
        </section>

        {/* Rewards Program Section */}
        <section className="rewards-section" id="rewards">
          <h2>CoffeeAbode Rewards Program</h2>
          
          <div className="rewards-intro">
            <p>
              Join the Coffee Abode Rewards program and earn points with every purchase! 
              Redeem your points for free drinks, exclusive merchandise, and special perks.
            </p>
          </div>

          <div className="rewards-grid">
            <div className="reward-tier">
              <div className="tier-icon">★</div>
              <h3>Bronze Member</h3>
              <p className="tier-requirement">0 - 499 Points</p>
              <ul>
                <li>Earn 1 point per ₹10 spent</li>
                <li>Birthday beverage reward</li>
                <li>Early access to new products</li>
                <li>Free refills on filter coffee</li>
              </ul>
            </div>

            <div className="reward-tier featured">
              <div className="tier-badge">POPULAR</div>
              <div className="tier-icon">★★</div>
              <h3>Silver Member</h3>
              <p className="tier-requirement">500 - 1,999 Points</p>
              <ul>
                <li>Earn 1.5 points per ₹10 spent</li>
                <li>All Bronze benefits</li>
                <li>Free size upgrade on drinks</li>
                <li>Monthly bonus points</li>
                <li>Exclusive member events</li>
              </ul>
            </div>

            <div className="reward-tier">
              <div className="tier-icon">★★★</div>
              <h3>Gold Member</h3>
              <p className="tier-requirement">2,000+ Points</p>
              <ul>
                <li>Earn 2 points per ₹10 spent</li>
                <li>All Silver benefits</li>
                <li>Free pastry with any beverage</li>
                <li>Priority seating</li>
                <li>Personalized offers</li>
                <li>Annual anniversary gift</li>
              </ul>
            </div>
          </div>

          <div className="how-to-join">
            <h3>How to Join</h3>
            <div className="join-steps">
              <div className="step">
                <span className="step-number">1</span>
                <h4>Download App</h4>
                <p>Get the CoffeeAbode app from App Store or Google Play</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <h4>Sign Up</h4>
                <p>Create your account with email or phone number</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <h4>Start Earning</h4>
                <p>Show your app at checkout and earn points instantly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Day Offer Section */}
        <section className="rewards-section alt-bg" id="rewards-day">
          <h2>CoffeeAbode Rewards Day Offer</h2>
          
          <div className="special-offer-card">
            <div className="offer-badge">EVERY FRIDAY</div>
            <h3>2X Points Friday!</h3>
            <p className="offer-highlight">Double Your Rewards Every Friday</p>
            
            <div className="offer-details">
              <p>
                Every Friday is Rewards Day at Coffee Abode! All rewards members earn 
                <strong> double points</strong> on all purchases made in-store or through our app.
              </p>
              
              <div className="offer-features">
                <div className="feature">
                  <span className="feature-icon">×2</span>
                  <p>Double points on all items</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">+</span>
                  <p>Surprise bonus rewards</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">24h</span>
                  <p>Valid all day Friday</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">◆</span>
                  <p>In-store & app orders</p>
                </div>
              </div>

              <div className="offer-terms">
                <h4>Terms & Conditions:</h4>
                <ul>
                  <li>Offer valid for Coffee Abode Rewards members only</li>
                  <li>Double points apply to all purchases made on Fridays</li>
                  <li>Cannot be combined with other promotional offers</li>
                  <li>Points will be credited to your account within 24 hours</li>
                  <li>Offer subject to change or cancellation without notice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Season's Gifting Section */}
        <section className="rewards-section" id="gifting">
          <h2>Season's Gifting</h2>
          
          <div className="gifting-intro">
            <p>
              Spread joy with Coffee Abode gift cards and curated gift sets. Perfect for every 
              occasion, from birthdays to festivals to corporate gifting.
            </p>
          </div>

          <div className="gifting-options">
            <div className="gift-card">
              <img src={`${process.env.PUBLIC_URL}/img/Coffee5.jpg`} alt="Gift Card" />
              <h3>Digital Gift Cards</h3>
              <p>Send instantly via email or SMS. Choose from ₹500 to ₹5,000</p>
              <div className="gift-features">
                <span>✓ Instant delivery</span>
                <span>✓ Personalized message</span>
                <span>✓ Never expires</span>
              </div>
              <button className="gift-btn">Buy Now</button>
            </div>

            <div className="gift-card">
              <img src={`${process.env.PUBLIC_URL}/img/Coffee6.jpg`} alt="Physical Gift Card" />
              <h3>Physical Gift Cards</h3>
              <p>Beautiful premium cards delivered to your doorstep</p>
              <div className="gift-features">
                <span>✓ Premium packaging</span>
                <span>✓ Custom amounts</span>
                <span>✓ Free delivery over ₹2,000</span>
              </div>
              <button className="gift-btn">Order Card</button>
            </div>

            <div className="gift-card">
              <img src={`${process.env.PUBLIC_URL}/img/Coffee7.jpg`} alt="Gift Hampers" />
              <h3>Curated Gift Hampers</h3>
              <p>Luxury coffee sets with premium beans, mugs, and accessories</p>
              <div className="gift-features">
                <span>✓ Gourmet selection</span>
                <span>✓ Gift wrapped</span>
                <span>✓ Corporate discounts</span>
              </div>
              <button className="gift-btn">Explore Sets</button>
            </div>
          </div>

          <div className="seasonal-offers">
            <h3>Special Seasonal Offers</h3>
            <div className="seasonal-grid">
              <div className="seasonal-card">
                <h4>🎄 Holiday Season</h4>
                <p>20% extra value on gift cards ₹2,000 and above</p>
                <span className="season-period">Nov - Jan</span>
              </div>
              <div className="seasonal-card">
                <h4>🪔 Diwali Special</h4>
                <p>Exclusive festive hampers with traditional sweets</p>
                <span className="season-period">October</span>
              </div>
              <div className="seasonal-card">
                <h4>💝 Valentine's Day</h4>
                <p>Couples combo offers and romantic gift sets</p>
                <span className="season-period">February</span>
              </div>
              <div className="seasonal-card">
                <h4>🎓 Graduation Gifts</h4>
                <p>Student-friendly gift bundles starting at ₹299</p>
                <span className="season-period">May - July</span>
              </div>
            </div>
          </div>

          <div className="corporate-gifting">
            <h3>Corporate Gifting Solutions</h3>
            <p>
              Looking to gift your employees, clients, or partners? We offer customized corporate 
              gifting solutions with bulk discounts, branded packaging, and dedicated support.
            </p>
            <ul>
              <li>Minimum order: 25 units</li>
              <li>Custom branding available</li>
              <li>Volume discounts up to 30%</li>
              <li>Dedicated account manager</li>
              <li>Flexible payment terms</li>
            </ul>
            <button className="corporate-btn">Contact Corporate Team</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Rewards;
