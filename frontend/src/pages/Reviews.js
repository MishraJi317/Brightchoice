import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    rating: 5,
    comment: ''
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      setReviews(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      alert('Error fetching reviews. Please try again later.');
      // Set sample reviews if API fails
     
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const dataobj = {
      //   "parentName": "Ashish Mishra",
      //   "childName": "Paarth",
      //   "rating": 5,
      //   "comment": "My Son absolutely loves the coding classes! The teachers are patient and make learning so much fun. Highly recommend!"
      // }
      console.log(formData);
      const response = await axios.post('/api/reviews', formData);
      setReviews([response.data, ...reviews]);
      setFormData({
        parentName: '',
        childName: '',
        rating: 5,
        comment: ''
      });
      setShowForm(false);
      alert('Thank you for your review! 🌟');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('There was an error submitting your review. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <div className="reviews-page">
        <div className="loading">Loading reviews... ⭐</div>
      </div>
    );
  }

  return (
    <div className="reviews-page">
      <div className="reviews-header">
        <h1>⭐ Parent Reviews ⭐</h1>
        <p>See what other parents are saying about BrightChoice!</p>
        <button 
          className="add-review-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '➕ Leave a Review'}
        </button>
      </div>

      {showForm && (
        <div className="review-form-container">
          <form className="review-form" onSubmit={handleSubmit}>
            <h2>Share Your Experience! 🌟</h2>
            <div className="form-group">
              <label>Your Name (Parent):</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Your Child's Name:</label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                placeholder="Enter your child's name"
              />
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star-btn ${formData.rating >= star ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Your Review:</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your experience..."
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit Review 🚀
            </button>
          </form>
        </div>
      )}

      <div className="reviews-container">
        {reviews.length === 0 ? (
          <div className="no-reviews">
            <p>No reviews yet. Be the first to share your experience! 🎉</p>
          </div>
        ) : (
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.parentName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="reviewer-name">{review.parentName}</div>
                      <div className="reviewer-child">Parent of {review.childName}</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
                <div className="review-date">
                  {new Date(review.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;



