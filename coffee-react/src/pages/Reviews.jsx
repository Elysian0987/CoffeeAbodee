import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';
import './Reviews.css';

const Reviews = () => {
  // Sample existing reviews (in real app, these would come from a database)
  const existingReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "October 28, 2025",
      product: "Cappuccino",
      text: "Absolutely amazing! The best cappuccino I've ever had. Rich, creamy, and perfectly balanced."
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "October 25, 2025",
      product: "Pour Over Coffee",
      text: "Great quality coffee beans. The pour over kit is excellent and the instructions were very helpful."
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      date: "October 20, 2025",
      product: "Coffee Mug",
      text: "Beautiful mug with excellent quality. Keeps my coffee hot for a long time. Highly recommend!"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`review-star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div>
      <Header />
      <div className="reviews-page">
        <div className="reviews-container">
          <h1 className="reviews-page-title">Customer Reviews</h1>
          <p className="reviews-subtitle">Share your experience with Coffee Abode</p>

          {/* Review Form */}
          <ReviewForm productName="General" />

          {/* Existing Reviews */}
          <div className="existing-reviews">
            <h2 className="existing-reviews-title">Recent Reviews</h2>
            <div className="reviews-list">
              {existingReviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-author">
                      <div className="author-avatar">
                        {review.name.charAt(0)}
                      </div>
                      <div className="author-info">
                        <h4>{review.name}</h4>
                        <p className="review-date">{review.date}</p>
                      </div>
                    </div>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="review-product">Product: {review.product}</p>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
