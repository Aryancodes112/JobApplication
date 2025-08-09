import React from 'react';
import TestimonialCard from './TestimonialCard';
import '../Styles/testimonials.css';
import user1 from '../assets/user1.jpeg';
import user2 from '../assets/user2.jpeg';
import user3 from '../assets/user3.jpeg';

const testimonialData = [
  {
    image: user1,
    name: 'Anjali Singh',
    testimonial: 'This platform helped me land my dream job in just two weeks!',
  },
  {
    image: user2,
    name: 'Aniket Rane',
    testimonial: 'The process was smooth, and the UI is super friendly. Love it!',
  },
  {
    image: user3,
    name: 'Mia Wallace',
    testimonial: 'Great job recommendations and helpful resume tips!',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What our clients say</h2>
      <div className="testimonial-grid">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            image={item.image}
            name={item.name}
            testimonial={item.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
