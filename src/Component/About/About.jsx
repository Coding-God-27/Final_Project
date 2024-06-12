import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1 className="header-title">Our Company</h1>
      </header>
      
      <section className="section section-left">
        <div className="section-content">
          <h2 className="section-heading">Building Landmark Edifices</h2>
          <p className="section-text">
            Indiabulls Real Estate stands for excellence and luxury in residential and commercial properties. It was incorporated in 2006 with its focus on construction and development of residential, commercial and SEZ projects across major Indian metros. To grow its footprint internationally, and to give wings to its global ambitions, Indiabulls branched out to London a couple of years ago with some of the most marquee projects in the heart of upscale central London.
          </p>
        </div>
        <div className="section-image">
          <img src="https://www.indiabullsrealestate.com/wp-content/uploads/2017/07/Golf-City-Club-house.jpg" alt="Company Building" />
        </div>
      </section>
      
      <section className="section section-right">
        <div className="section-content">
          <h2 className="section-heading">Growth</h2>
          <p className="section-text">
            It is the company’s mission to deliver value creating spaces, and its endeavours epitomise this philosophy. It has delivered iconic commercial developments of over 3.3 million sq. ft. in Mumbai namely – One Indiabulls Centre & Indiabulls Finance Centre and in the residential segment – Indiabulls Sky, Mumbai and Greens Panvel, apart from delivering projects in Gurugram, Chennai, Madurai, Ahmedabad and Thane.
          </p>
          <p className="section-text">
            Indiabulls Real Estate is one of the largest real estate company with a Gross Development Value of INR 32,189 crores, and net worth of INR 7,090 crores as of March 31, 2018 and with 15 on-going projects with total saleable area of 33.91 million sq. ft. under its wing. Further it has commercial development with a leasable area of 3.15 million sq.ft. under construction. Additionally the company has a land bank of 1,046 acres and also possesses 2,588 acres of SEZ land at Nasik, Maharashtra. In July of 2014, Indiabulls Real estate acquired the prime property, 22 Hanover Square in Central London for Rs.1630 Cr.
          </p>
          <p className="section-text">
            Ratings IBREL has been assigned credit rating of AA- for long term debt, one of the highest in the industry.
          </p>
        </div>
        <div className="section-image">
          <img src="https://img.freepik.com/free-vector/housing-prices-rise-concept-illustration_114360-25108.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=ais_user" alt="Growth Chart" />
        </div>
      </section>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>456 Shankar Nagar,Bandra,Mumbai</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 8957372849</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>ibrealestate@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link text-white-50" href="">About Us</a>
            <a className="btn btn-link text-white-50" href="">Contact Us</a>
            <a className="btn btn-link text-white-50" href="">Our Services</a>
            <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
            <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Photo Gallery</h5>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <Link to="/signin">
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" style={{ width: '280px', height: '50px' }}>SignUp</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">IbRealEstate</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AboutUs;
