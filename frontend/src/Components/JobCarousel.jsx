import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/JobCarousel.css';

const jobData = [
  { title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
  { title: 'UI/UX Designer', company: 'Designify', location: 'New York' },
  { title: 'Full Stack Engineer', company: 'CodeWorks', location: 'San Francisco' },
  { title: 'Backend Developer', company: 'API Systems', location: 'Berlin' },
  { title: 'Data Analyst', company: 'Insights Lab', location: 'London' },
];

const JobCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Featured Jobs</h2>
      <Slider {...settings}>
        {jobData.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <span>{job.location}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobCarousel;