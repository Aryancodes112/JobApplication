import React from 'react';
import '../Styles/testimonialcard.css';
// import user1 from '../assets/user1.jpg';
// import user2 from '../assets/user2.jpg';
// import user3 from '../assets/user3.jpg';


const TestimonialCard = ({ image, name, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-image" />
        <h3 className="testimonial-name">{name}</h3>
      </div>
      <p className="testimonial-text">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
