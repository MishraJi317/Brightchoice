import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('/api/packages');
      setPackages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching packages:', error);
      // Set sample data if API fails
      setPackages([
        {
          _id: '1',
          name: 'Starter Pack',
          description: 'Perfect for beginners! Get started with 2 courses of your choice.',
          price: 349,
          discount: 10,
          duration: '3 months',
          features: [
            '2 courses of your choice',
            'Weekly progress reports',
            'Certificate of completion',
            '24/7 parent support'
          ]
        },
        {
          _id: '2',
          name: 'Explorer Pack',
          description: 'For curious minds! Access to 5 courses with amazing discounts.',
          price: 799,
          discount: 20,
          duration: '6 months',
          features: [
            '5 courses of your choice',
            'Weekly progress reports',
            'Certificates for all courses',
            'Priority support',
            'Bonus learning materials',
            'Live Q&A sessions'
          ]
        },
        {
          _id: '3',
          name: 'Adventure Pack',
          description: 'The ultimate learning experience! Unlimited courses for a full year.',
          price: 1499,
          discount: 30,
          duration: '12 months',
          features: [
            'Unlimited courses',
            'Daily progress reports',
            'All certificates included',
            'VIP support',
            'Exclusive bonus content',
            'Monthly live sessions',
            'Early access to new courses',
            'Personal learning coach'
          ]
        }
      ]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="packages-page">
        <div className="loading">Loading amazing packages... 🎁</div>
      </div>
    );
  }

  const calculateDiscount = (price, discount) => {
    return Math.round(price * (1 - discount / 100));
  };

  return (
    <div className="packages-page">
      <div className="packages-header">
        <h1>🎁 Special Learning Packages 🎁</h1>
        <p>Choose the perfect package for your child's learning journey!</p>
      </div>
      <div className="packages-container">
        {packages.length === 0 ? (
          <div className="no-packages">
            <p>No packages available at the moment. Check back soon! 🎉</p>
          </div>
        ) : (
          <div className="packages-grid">
            {packages.map((pkg) => {
              const discountedPrice = calculateDiscount(pkg.price, pkg.discount);
              return (
                <div key={pkg._id} className={`package-card ${pkg.discount > 20 ? 'featured' : ''}`}>
                  {pkg.discount > 20 && (
                    <div className="popular-badge">⭐ Most Popular</div>
                  )}
                  <div className="package-header">
                    <h3 className="package-name">{pkg.name}</h3>
                    <div className="package-duration">⏱️ {pkg.duration}</div>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-pricing">
                    {pkg.discount > 0 && (
                      <div className="original-price">${pkg.price}</div>
                    )}
                    <div className="current-price">
                      ${discountedPrice}
                      {pkg.discount > 0 && (
                        <span className="discount-badge">-{pkg.discount}%</span>
                      )}
                    </div>
                  </div>
                  <div className="package-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {pkg.features.map((feature, index) => (
                        <li key={index}>
                          <span className="feature-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="package-button">
                    Get Started! 🚀
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;



