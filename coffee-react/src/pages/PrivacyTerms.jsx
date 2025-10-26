import React from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Legal.css';

const PrivacyTerms = () => {
  return (
    <div>
      <Header />
      
      <div className="legal-container">
        <section className="legal-hero">
          <h1>Privacy & Legal Information</h1>
          <p className="tagline">Your Trust, Our Commitment</p>
        </section>

        {/* Privacy Policy Section */}
        <section className="legal-section" id="privacy">
          <h2>Privacy Policy</h2>
          <p className="last-updated">Last Updated: October 27, 2025</p>
          
          <div className="legal-content">
            <h3>1. Information We Collect</h3>
            <p>
              At Coffee Abode, we respect your privacy. We collect information that you provide directly to us, 
              including your name, email address, phone number, delivery address, and payment information when 
              you make a purchase or create an account.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our services</li>
              <li>Send promotional offers and updates (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <h3>3. Information Sharing</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with trusted service providers who assist us in operating our business, such as 
              payment processors and delivery partners, under strict confidentiality agreements.
            </p>

            <h3>4. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal information. All 
              payment transactions are encrypted using SSL technology. However, no method of transmission 
              over the internet is 100% secure.
            </p>

            <h3>5. Cookies</h3>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              You can control cookie settings through your browser preferences.
            </p>

            <h3>6. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h3>7. Contact Us</h3>
            <p>
              For any privacy-related questions or concerns, please contact us at 
              <strong> privacy@coffeeabode.com</strong>
            </p>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="legal-section" id="terms">
          <h2>Terms and Conditions</h2>
          <p className="last-updated">Last Updated: October 27, 2025</p>
          
          <div className="legal-content">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using Coffee Abode's website and services, you agree to be bound by these 
              Terms and Conditions. If you do not agree, please do not use our services.
            </p>

            <h3>2. Products and Pricing</h3>
            <p>
              All product descriptions, images, and prices are subject to change without notice. We reserve 
              the right to limit quantities and discontinue products. Prices are listed in Indian Rupees (₹) 
              and include applicable taxes unless otherwise stated.
            </p>

            <h3>3. Orders and Payment</h3>
            <p>
              By placing an order, you are making an offer to purchase products. We reserve the right to 
              accept or decline any order. Payment must be made at the time of order placement through our 
              accepted payment methods.
            </p>

            <h3>4. Delivery</h3>
            <p>
              Delivery times are estimates and may vary. We are not responsible for delays caused by factors 
              beyond our control. Title and risk of loss pass to you upon delivery.
            </p>

            <h3>5. Returns and Refunds</h3>
            <p>
              Due to the nature of food and beverage products, we do not accept returns unless the product 
              is defective or damaged upon delivery. Contact us within 24 hours of receipt for issues.
            </p>

            <h3>6. Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of 
              Coffee Abode and protected by copyright laws. Unauthorized use is prohibited.
            </p>

            <h3>7. Limitation of Liability</h3>
            <p>
              Coffee Abode shall not be liable for any indirect, incidental, or consequential damages arising 
              from the use of our products or services.
            </p>

            <h3>8. Governing Law</h3>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive 
              jurisdiction of courts in India.
            </p>
          </div>
        </section>

        {/* Mobile App Terms Section */}
        <section className="legal-section" id="app-terms">
          <h2>CoffeeAbode Mobile App Terms of Use</h2>
          <p className="last-updated">Last Updated: October 27, 2025</p>
          
          <div className="legal-content">
            <h3>1. App License</h3>
            <p>
              Coffee Abode grants you a limited, non-exclusive, non-transferable license to download and use 
              the CoffeeAbode mobile application on your personal device for personal, non-commercial purposes.
            </p>

            <h3>2. Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You must 
              immediately notify us of any unauthorized access to your account.
            </p>

            <h3>3. App Permissions</h3>
            <p>The CoffeeAbode app may request access to:</p>
            <ul>
              <li><strong>Location:</strong> To find nearby Coffee Abode locations and provide delivery services</li>
              <li><strong>Camera:</strong> To scan QR codes for rewards and offers</li>
              <li><strong>Notifications:</strong> To send order updates and promotional offers</li>
              <li><strong>Payment Information:</strong> To process in-app purchases securely</li>
            </ul>

            <h3>4. In-App Purchases</h3>
            <p>
              All in-app purchases are processed through secure payment gateways. Prices are displayed in the 
              app and may differ from website prices. All sales are final unless otherwise specified.
            </p>

            <h3>5. Rewards Program</h3>
            <p>
              The Coffee Abode Rewards program is exclusive to app users. Points earned are non-transferable 
              and expire according to the program terms. We reserve the right to modify or discontinue the 
              rewards program at any time.
            </p>

            <h3>6. Updates and Modifications</h3>
            <p>
              We may update the app from time to time to improve functionality and security. You are responsible 
              for keeping your app updated to the latest version.
            </p>

            <h3>7. Termination</h3>
            <p>
              We reserve the right to suspend or terminate your access to the app if you violate these terms 
              or engage in fraudulent activities.
            </p>

            <h3>8. Third-Party Services</h3>
            <p>
              The app may contain links to third-party services or integrate with third-party platforms. 
              We are not responsible for the content or practices of these external services.
            </p>

            <h3>9. Data Usage</h3>
            <p>
              The app collects usage data to improve user experience. This data is handled according to our 
              Privacy Policy. Standard data charges from your mobile carrier may apply.
            </p>

            <h3>10. Contact for App Support</h3>
            <p>
              For technical support or app-related inquiries, contact us at 
              <strong> appsupport@coffeeabode.com</strong>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyTerms;
