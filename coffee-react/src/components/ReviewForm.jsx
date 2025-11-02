import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ productName }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim() && name.trim()) {
      // Here you would typically send the review to a backend
      console.log('Review submitted:', { productName, rating, reviewText, name });
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setRating(0);
        setReviewText('');
        setName('');
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  return (
    <div className="review-form-container">
      <h3 className="review-form-title">Write a Review</h3>
      
      {submitted ? (
        <div className="review-success-message">
          <p>✓ Thank you for your review!</p>
        </div>
      ) : (
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reviewer-name">Your Name</label>
            <input
              type="text"
              id="reviewer-name"
              className="review-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'filled' : ''}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="review-text">Your Review</label>
            <textarea
              id="review-text"
              className="review-textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Share your thoughts about this product..."
              rows="4"
              required
            />
          </div>

          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
