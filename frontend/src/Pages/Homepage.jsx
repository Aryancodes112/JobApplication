// Pages/Home.jsx
import React from 'react';
import Home from '../Components/Home';
import JobCarousel from '../Components/JobCarousel';
import Feature from '../Components/Feature';
import Testimonials from '../Components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Home />
      <JobCarousel />
      <Feature />
      <Testimonials />
    </>
  );
};

export default HomePage;
