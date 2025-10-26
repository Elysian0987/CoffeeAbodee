import React, { useState } from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Careers.css';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 1,
      title: 'Barista',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '0-2 years',
      description: 'Join our team as a barista and craft exceptional coffee experiences for our customers.',
      responsibilities: [
        'Prepare and serve high-quality coffee and beverages',
        'Maintain cleanliness and organization of work area',
        'Provide excellent customer service',
        'Learn and master various brewing techniques',
        'Handle cash and card transactions accurately'
      ],
      requirements: [
        'Passion for coffee and customer service',
        'Ability to work in a fast-paced environment',
        'Excellent communication skills',
        'Flexibility to work weekends and holidays',
        'Previous barista experience is a plus'
      ]
    },
    {
      id: 2,
      title: 'Store Manager',
      location: 'Bangalore, Mumbai, Delhi',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Lead and manage daily operations of our Coffee Abode store while ensuring exceptional customer experience.',
      responsibilities: [
        'Oversee daily store operations and team management',
        'Ensure excellent customer service standards',
        'Manage inventory, ordering, and stock control',
        'Train, develop, and motivate team members',
        'Achieve sales targets and control costs',
        'Handle customer complaints and resolve issues'
      ],
      requirements: [
        'Proven experience in retail or hospitality management',
        'Strong leadership and team management skills',
        'Excellent problem-solving abilities',
        'Knowledge of P&L management',
        'Passion for coffee and customer service',
        'Degree in Business Management preferred'
      ]
    },
    {
      id: 3,
      title: 'Marketing Executive',
      location: 'Mumbai - Head Office',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Drive marketing initiatives and campaigns to build brand awareness and customer engagement.',
      responsibilities: [
        'Develop and execute marketing campaigns',
        'Manage social media platforms and content',
        'Coordinate promotional events and partnerships',
        'Analyze market trends and customer insights',
        'Create engaging content for digital platforms',
        'Track and report campaign performance'
      ],
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        'Experience in digital marketing and social media',
        'Creative thinking and excellent communication',
        'Proficiency in marketing tools and analytics',
        'Strong project management skills',
        'Experience in F&B industry is a plus'
      ]
    },
    {
      id: 4,
      title: 'Delivery Partner',
      location: 'All Cities',
      type: 'Part-time / Full-time',
      experience: 'Freshers Welcome',
      description: 'Deliver happiness by bringing fresh Coffee Abode orders to customers\' doorsteps.',
      responsibilities: [
        'Pick up and deliver orders to customers',
        'Ensure timely and safe delivery',
        'Maintain delivery vehicle in good condition',
        'Provide excellent customer service',
        'Handle cash and digital payments'
      ],
      requirements: [
        'Valid driving license for two-wheeler',
        'Own vehicle (bike/scooter) preferred',
        'Good knowledge of local area',
        'Smartphone for app navigation',
        'Reliable and punctual',
        'Age 18+ years'
      ]
    }
  ];

  return (
    <div>
      <Header />
      
      <div className="careers-container">
        <section className="careers-hero">
          <h1>Join Our Team</h1>
          <p className="tagline">Build Your Career with Coffee Abode</p>
        </section>

        <section className="careers-section">
          <div className="careers-intro">
            <h2>Why Work With Us?</h2>
            <p>
              At Coffee Abode, we believe our team is our greatest asset. We're more than just a coffee shop—we're 
              a community of passionate individuals dedicated to creating memorable experiences for our customers.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Pay</h3>
              <p>Attractive salary packages with performance-based incentives</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Learning & Development</h3>
              <p>Comprehensive training programs and skill development opportunities</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🏥</div>
              <h3>Health Benefits</h3>
              <p>Medical insurance coverage for you and your family</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible schedules and paid time off</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">☕</div>
              <h3>Free Coffee!</h3>
              <p>Unlimited coffee and staff discounts on all products</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>Clear career progression paths and internal promotions</p>
            </div>
          </div>
        </section>

        <section className="careers-section alt-bg">
          <h2>Current Openings</h2>
          
          <div className="positions-list">
            {positions.map((position) => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <div>
                    <h3>{position.title}</h3>
                    <div className="position-meta">
                      <span className="meta-item">📍 {position.location}</span>
                      <span className="meta-item">⏰ {position.type}</span>
                      <span className="meta-item">📊 {position.experience}</span>
                    </div>
                  </div>
                  <button 
                    className="details-btn"
                    onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                  >
                    {selectedPosition === position.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>

                {selectedPosition === position.id && (
                  <div className="position-details">
                    <p className="position-description">{position.description}</p>
                    
                    <div className="details-section">
                      <h4>Key Responsibilities:</h4>
                      <ul>
                        {position.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="details-section">
                      <h4>Requirements:</h4>
                      <ul>
                        {position.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="apply-btn">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="careers-section">
          <h2>Our Culture</h2>
          
          <div className="culture-content">
            <div className="culture-text">
              <h3>What Makes Us Special</h3>
              <p>
                At Coffee Abode, we foster an inclusive, supportive environment where every team member 
                can thrive. We value diversity, creativity, and collaboration.
              </p>
              <ul className="culture-values">
                <li><strong>Passion:</strong> We love what we do and it shows in every cup</li>
                <li><strong>Integrity:</strong> We do the right thing, always</li>
                <li><strong>Excellence:</strong> We strive for perfection in everything</li>
                <li><strong>Community:</strong> We care about our team and customers</li>
                <li><strong>Innovation:</strong> We're always looking for better ways</li>
              </ul>
            </div>
            
            <div className="culture-testimonials">
              <h3>What Our Team Says</h3>
              <div className="testimonial">
                <p className="quote">
                  "Coffee Abode gave me the opportunity to grow from a barista to a store manager. 
                  The training and support have been incredible!"
                </p>
                <p className="author">- Priya S., Store Manager</p>
              </div>
              
              <div className="testimonial">
                <p className="quote">
                  "I love the family atmosphere here. My colleagues are supportive, and management 
                  truly cares about our well-being."
                </p>
                <p className="author">- Rahul M., Senior Barista</p>
              </div>
            </div>
          </div>
        </section>

        <section className="careers-section apply-section">
          <h2>Ready to Join Us?</h2>
          <p>
            Don't see a position that fits? Send us your resume anyway! We're always looking for 
            talented individuals to join our growing team.
          </p>
          <div className="apply-methods">
            <div className="method">
              <h3>📧 Email Your Resume</h3>
              <p>careers@coffeeabode.com</p>
            </div>
            <div className="method">
              <h3>🏢 Walk-in Applications</h3>
              <p>Visit any Coffee Abode location with your resume</p>
            </div>
            <div className="method">
              <h3>💼 LinkedIn</h3>
              <p>Connect with us on LinkedIn and apply</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
