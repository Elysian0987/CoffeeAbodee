import React from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Delivery.css';

const Delivery = () => {
  return (
    <div>
      <Header />
      
      <div className="delivery-container">
        <section className="delivery-hero">
          <h1>Delivery Information</h1>
          <p className="tagline">Fresh Coffee, Delivered to Your Doorstep</p>
        </section>

        <section className="delivery-section">
          <h2>How Delivery Works</h2>
          
          <div className="delivery-steps">
            <div className="delivery-step">
              <div className="step-circle">1</div>
              <h3>Place Your Order</h3>
              <p>Browse our menu and add items to your cart via our website or mobile app</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="delivery-step">
              <div className="step-circle">2</div>
              <h3>We Prepare</h3>
              <p>Our baristas carefully craft your order with fresh ingredients</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="delivery-step">
              <div className="step-circle">3</div>
              <h3>Quick Delivery</h3>
              <p>Your order is delivered hot and fresh within 30-45 minutes</p>
            </div>
          </div>
        </section>

        <section className="delivery-section alt-bg">
          <h2>Delivery Areas & Timings</h2>
          
          <div className="delivery-info-grid">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Service Areas</h3>
              <p>We currently deliver within a 10 km radius of our Coffee Abode locations.</p>
              <p className="info-detail">
                Major areas covered: Downtown, Suburban Zones, Business Districts, 
                Residential Complexes
              </p>
              <button className="check-btn">Check Your Area</button>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Delivery Hours</h3>
              <div className="timing-list">
                <div className="timing-row">
                  <span>Monday - Friday</span>
                  <span>7:00 AM - 10:00 PM</span>
                </div>
                <div className="timing-row">
                  <span>Saturday - Sunday</span>
                  <span>8:00 AM - 11:00 PM</span>
                </div>
                <div className="timing-row">
                  <span>Public Holidays</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">💰</div>
              <h3>Delivery Charges</h3>
              <div className="pricing-table">
                <div className="pricing-row">
                  <span>Orders below ₹299</span>
                  <span className="price">₹50</span>
                </div>
                <div className="pricing-row">
                  <span>Orders ₹299 - ₹599</span>
                  <span className="price">₹30</span>
                </div>
                <div className="pricing-row highlight">
                  <span>Orders above ₹600</span>
                  <span className="price">FREE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="delivery-section">
          <h2>Packaging & Safety</h2>
          
          <div className="safety-features">
            <div className="safety-card">
              <div className="safety-icon">♻️</div>
              <h3>Eco-Friendly Packaging</h3>
              <p>
                All our delivery packaging is 100% biodegradable and recyclable. We use 
                sustainable materials to minimize environmental impact.
              </p>
            </div>

            <div className="safety-card">
              <div className="safety-icon">🔒</div>
              <h3>Sealed for Safety</h3>
              <p>
                Every order is sealed with tamper-proof packaging to ensure your food and 
                beverages remain safe and untouched during transit.
              </p>
            </div>

            <div className="safety-card">
              <div className="safety-icon">🌡️</div>
              <h3>Temperature Controlled</h3>
              <p>
                Hot beverages stay hot and cold drinks stay cold with our insulated delivery 
                bags designed to maintain optimal temperature.
              </p>
            </div>

            <div className="safety-card">
              <div className="safety-icon">✅</div>
              <h3>Contactless Delivery</h3>
              <p>
                Choose contactless delivery for a safe, no-contact experience. Your order 
                will be left at your doorstep.
              </p>
            </div>
          </div>
        </section>

        <section className="delivery-section alt-bg">
          <h2>Tracking Your Order</h2>
          
          <div className="tracking-info">
            <p className="tracking-intro">
              Stay updated with real-time tracking on our mobile app. You'll receive notifications at every stage:
            </p>
            
            <div className="tracking-stages">
              <div className="stage">
                <span className="stage-icon">📝</span>
                <h4>Order Confirmed</h4>
                <p>Your order has been received and is being prepared</p>
              </div>
              <div className="stage">
                <span className="stage-icon">👨‍🍳</span>
                <h4>Preparing</h4>
                <p>Our baristas are crafting your beverages with care</p>
              </div>
              <div className="stage">
                <span className="stage-icon">📦</span>
                <h4>Ready for Pickup</h4>
                <p>Your order is packed and ready for delivery</p>
              </div>
              <div className="stage">
                <span className="stage-icon">🚗</span>
                <h4>Out for Delivery</h4>
                <p>Your order is on its way to you</p>
              </div>
              <div className="stage">
                <span className="stage-icon">✨</span>
                <h4>Delivered</h4>
                <p>Enjoy your Coffee Abode order!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="delivery-section">
          <h2>Delivery Policies</h2>
          
          <div className="policies">
            <div className="policy-item">
              <h3>🕒 Estimated Delivery Time</h3>
              <p>
                Standard delivery time is 30-45 minutes from order confirmation. During peak hours 
                (8-10 AM, 12-2 PM, 6-8 PM), delivery may take up to 60 minutes.
              </p>
            </div>

            <div className="policy-item">
              <h3>❌ Cancellation Policy</h3>
              <p>
                Orders can be cancelled within 2 minutes of placement for a full refund. After preparation 
                begins, cancellations are not accepted. Contact support for special circumstances.
              </p>
            </div>

            <div className="policy-item">
              <h3>🔄 Wrong or Missing Items</h3>
              <p>
                If your order is incorrect or items are missing, contact us within 30 minutes of delivery. 
                We'll send the correct items or issue a refund immediately.
              </p>
            </div>

            <div className="policy-item">
              <h3>🌧️ Weather Delays</h3>
              <p>
                During severe weather conditions, delivery times may be extended for safety. You'll be 
                notified of any significant delays via app notifications.
              </p>
            </div>

            <div className="policy-item">
              <h3>💳 Payment Methods</h3>
              <p>
                We accept credit/debit cards, UPI, net banking, digital wallets, and cash on delivery. 
                All online payments are processed through secure gateways.
              </p>
            </div>

            <div className="policy-item">
              <h3>💵 Minimum Order</h3>
              <p>
                Minimum order value for delivery is ₹150. No minimum order for pickup from our stores.
              </p>
            </div>
          </div>
        </section>

        <section className="delivery-section cta-section">
          <h2>Ready to Order?</h2>
          <p>Download our app or order online for fresh coffee delivered to your doorstep</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Order Now</button>
            <button className="cta-btn secondary">Download App</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;
