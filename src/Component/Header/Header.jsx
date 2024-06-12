import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4" style={{ marginTop: '70px' }}>
            Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Welcome to our Website, your ultimate destination for finding the perfect property! Whether you're looking to buy, rent, or invest, our platform offers a comprehensive range of properties in various locations to suit all your needs.
          </p>
          <a href="#" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
        </div>
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1447708518/photo/modern-villa-exterior-in-summer.webp?b=1&s=170667a&w=0&k=20&c=zh6wcDIxJk2ORk0Kg3hjVxQYWQsoLZ9TwAeCmxeYB-A="
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1481867504/photo/love-new-house-and-family-in-their-backyard-together-looking-at-their-property-or-luxury-real.webp?b=1&s=170667a&w=0&k=20&c=sdmKz3cpfVYdH602EUCYirvJ1Z69j1YDubccf263XMU="
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Header;
