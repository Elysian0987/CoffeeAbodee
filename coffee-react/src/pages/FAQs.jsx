import React, { useState } from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './FAQs.css';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          id: 1,
          question: 'What are Coffee Abode\'s opening hours?',
          answer: 'Most of our locations are open Monday-Friday from 7:00 AM to 10:00 PM, and Saturday-Sunday from 8:00 AM to 11:00 PM. Hours may vary by location. Please check our website or app for specific store hours.'
        },
        {
          id: 2,
          question: 'Do you offer free Wi-Fi?',
          answer: 'Yes! All Coffee Abode locations offer complimentary high-speed Wi-Fi for customers. Simply ask our staff for the password when you visit.'
        },
        {
          id: 3,
          question: 'Are your locations wheelchair accessible?',
          answer: 'Yes, all our Coffee Abode locations are designed to be fully accessible with wheelchair ramps, accessible restrooms, and comfortable seating arrangements.'
        }
      ]
    },
    {
      category: 'Orders & Payment',
      questions: [
        {
          id: 4,
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards (Visa, Mastercard, American Express), UPI payments, digital wallets (Paytm, PhonePe, Google Pay), net banking, and cash. Online orders can be paid through all these methods except cash.'
        },
        {
          id: 5,
          question: 'Can I customize my drink order?',
          answer: 'Absolutely! We encourage customization. You can adjust milk type (whole, skim, almond, oat, soy), sweetness level, add extra shots, flavored syrups, and more. Just let our baristas know your preferences.'
        },
        {
          id: 6,
          question: 'Do you have a minimum order value?',
          answer: 'There is no minimum order for dine-in or takeaway. For delivery orders, the minimum order value is ₹150. Orders above ₹600 qualify for free delivery.'
        },
        {
          id: 7,
          question: 'Can I cancel or modify my order?',
          answer: 'In-store orders cannot be cancelled once preparation begins. For delivery orders placed through our app, you can cancel within 2 minutes of placing the order for a full refund. Modifications can be requested immediately by contacting customer support.'
        }
      ]
    },
    {
      category: 'Rewards Program',
      questions: [
        {
          id: 8,
          question: 'How do I join the Coffee Abode Rewards program?',
          answer: 'Download our mobile app from the App Store or Google Play, create an account, and you\'re automatically enrolled! Start earning points with your first purchase.'
        },
        {
          id: 9,
          question: 'How do I earn and redeem points?',
          answer: 'Earn 1 point for every ₹10 spent (rates vary by membership tier). Points can be redeemed for free drinks, food items, and merchandise. Check the Rewards section in our app to see available redemption options.'
        },
        {
          id: 10,
          question: 'Do my rewards points expire?',
          answer: 'Points earned through purchases remain valid for 12 months from the date of earning. Bonus points from promotions may have different expiry dates as specified in the offer terms.'
        },
        {
          id: 11,
          question: 'Can I transfer my points to someone else?',
          answer: 'Rewards points are non-transferable and tied to your account. However, you can use your points to purchase gift cards for friends and family.'
        }
      ]
    },
    {
      category: 'Products & Menu',
      questions: [
        {
          id: 12,
          question: 'Do you offer dairy-free milk alternatives?',
          answer: 'Yes! We offer several plant-based milk options including almond milk, oat milk, soy milk, and coconut milk. These are available for all our beverages at a small additional charge.'
        },
        {
          id: 13,
          question: 'Do you have options for customers with dietary restrictions?',
          answer: 'Absolutely! We offer gluten-free, vegan, and sugar-free options. Our menu clearly marks items suitable for various dietary needs. Please inform our staff of any allergies or dietary restrictions.'
        },
        {
          id: 14,
          question: 'Can I purchase coffee beans to brew at home?',
          answer: 'Yes! We sell our signature coffee beans in various roasts and blends. Available in 250g, 500g, and 1kg packages. Ask in-store or order through our website.'
        },
        {
          id: 15,
          question: 'Do you offer seasonal or limited-time drinks?',
          answer: 'Yes! We regularly introduce seasonal specialties and limited-time beverages. Follow us on social media or check our app for the latest offerings.'
        }
      ]
    },
    {
      category: 'Delivery',
      questions: [
        {
          id: 16,
          question: 'How long does delivery take?',
          answer: 'Standard delivery time is 30-45 minutes from order confirmation. During peak hours (8-10 AM, 12-2 PM, 6-8 PM), it may take up to 60 minutes. You can track your order in real-time through our app.'
        },
        {
          id: 17,
          question: 'What are the delivery charges?',
          answer: 'Delivery charges are ₹50 for orders below ₹299, ₹30 for orders between ₹299-₹599, and FREE for orders above ₹600.'
        },
        {
          id: 18,
          question: 'Do you deliver to my area?',
          answer: 'We deliver within a 10 km radius of our store locations. Enter your address in our app or website to check if delivery is available in your area.'
        },
        {
          id: 19,
          question: 'What if my order arrives cold or incorrect?',
          answer: 'We apologize if this happens! Contact our customer support within 30 minutes of delivery with your order details and photos. We\'ll send a replacement or issue a full refund immediately.'
        }
      ]
    },
    {
      category: 'Gift Cards & Corporate',
      questions: [
        {
          id: 20,
          question: 'How do I purchase a gift card?',
          answer: 'Gift cards can be purchased in-store, on our website, or through our mobile app. Choose between digital gift cards (instant delivery via email/SMS) or physical cards (delivered to your address).'
        },
        {
          id: 21,
          question: 'Do gift cards expire?',
          answer: 'No! Coffee Abode gift cards never expire. They can be used at any of our locations or for online orders.'
        },
        {
          id: 22,
          question: 'Do you offer corporate gifting solutions?',
          answer: 'Yes! We have dedicated corporate gifting packages with customization options, bulk discounts, and personalized branding. Contact our corporate team at corporate@coffeeabode.com for more information.'
        }
      ]
    }
  ];

  return (
    <div>
      <Header />
      
      <div className="faqs-container">
        <section className="faqs-hero">
          <h1>Frequently Asked Questions</h1>
          <p className="tagline">We're Here to Help</p>
        </section>

        <section className="faqs-section">
          <div className="faqs-intro">
            <p>
              Find answers to the most commonly asked questions about Coffee Abode. 
              Can't find what you're looking for? Contact our customer support team.
            </p>
          </div>

          <div className="faqs-content">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="faq-category">
                <h2 className="category-title">{category.category}</h2>
                
                <div className="faq-list">
                  {category.questions.map((faq) => (
                    <div key={faq.id} className="faq-item">
                      <button 
                        className={`faq-question ${openFAQ === faq.id ? 'active' : ''}`}
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        <span>{faq.question}</span>
                        <span className="faq-icon">{openFAQ === faq.id ? '−' : '+'}</span>
                      </button>
                      
                      {openFAQ === faq.id && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-support">
          <h2>Still Have Questions?</h2>
          <p>Our customer support team is here to help you</p>
          
          <div className="support-options">
            <div className="support-card">
              <div className="support-icon">📧</div>
              <h3>Email Us</h3>
              <p>support@coffeeabode.com</p>
              <span className="response-time">Response within 24 hours</span>
            </div>

            <div className="support-card">
              <div className="support-icon">📞</div>
              <h3>Call Us</h3>
              <p>1800-123-COFFEE (1800-123-2633)</p>
              <span className="response-time">Mon-Sun: 9 AM - 9 PM</span>
            </div>

            <div className="support-card">
              <div className="support-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available on our app</p>
              <span className="response-time">Instant responses</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;
