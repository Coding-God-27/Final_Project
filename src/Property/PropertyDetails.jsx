import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider';
import './PropertyDetails.css';
import PaymentModal from '../Component/Payment/Payment'; 

const PropertyDetails = () => {
  const location = useLocation();
  const { state } = location;
  const { filteredResults = [] } = state || {};

  const userReviews = [
    { id: 1, name: 'John Doe', comment: 'Great property! Loved the spacious layout and modern amenities.' },
    { id: 2, name: 'Jane Smith', comment: 'Highly recommended! Excellent location and friendly neighborhood.' },
  ];

  return (
    <div className="container container-md">
      <h1 className='title'>Property Details</h1>
      {filteredResults.length > 0 ? (
        <ul className="property-list">
          {filteredResults.map((result) => (
            <li key={result.id} className="property-item">
              <h2 className="property-title">{result.title}</h2>
              <p className="property-address">{result.address}</p>
              <p className="property-price">Price: ${result.price}</p>
              <div className="property-images">
                <ImageSlider images={result.images} />
              </div>
              <p className="property-description">{result.description}</p>

              <div className="property-reviews">
                <h3>User Reviews</h3>
                <ul>
                  {userReviews.map((review) => (
                    <li key={review.id}>
                      <p>{review.comment}</p>
                      <p>- {review.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property-actions">
                <button className="btn-buy" data-toggle="modal" data-target="#staticBackdrop">
                  Buy Now
                </button>
                  <button className="btn-favorite">&#10084;</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No properties found</p>
      )}
      <PaymentModal /> 
    </div>
  );
};

export default PropertyDetails;