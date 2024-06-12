import React from 'react';

const AboutSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="img/about.jpg" alt="About" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
            <p className="mb-4">Browse a wide variety of properties, including apartments, houses, commercial spaces, and more, across multiple locations.</p>
            <p><i className="fa fa-check text-primary me-3"></i>Expert Assistance</p>
            <p><i className="fa fa-check text-primary me-3"></i>User-Friendly Interface</p>
            <p><i className="fa fa-check text-primary me-3"></i>Extensive Listings</p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
