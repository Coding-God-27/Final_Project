import React from 'react';
import { Link } from 'react-router-dom';


const PropertyTypes = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <h1 className="mb-3">Property Types</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <Link to="/apartment" className="cat-item d-block bg-light text-center rounded p-3">
            <div className="rounded p-4">
              <div className="icon mb-3">
                <img className="img-fluid" src="img/icon-apartment.png" alt="Icon" />
              </div>
              <h6>Apartment</h6>
              <span>123 Properties</span>
            </div>
          </Link>
        </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <Link to="/villa" className="cat-item d-block bg-light text-center rounded p-3">
            <div className="rounded p-4">
              <div className="icon mb-3">
                <img className="img-fluid" src="img/icon-villa.png" alt="Icon" />
              </div>
              <h6>Villa</h6>
              <span>456 Properties</span>
            </div>
          </Link>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <Link to="/home" className="cat-item d-block bg-light text-center rounded p-3">
            <div className="rounded p-4">
              <div className="icon mb-3">
                <img className="img-fluid" src="img/icon-villa.png" alt="Icon" />
              </div>
              <h6>Home</h6>
              <span>154 Properties</span>
            </div>
          </Link>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-housing.png" alt="Icon" />
                </div>
                <h6>Office</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-building.png" alt="Icon" />
                </div>
                <h6>Building</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
                </div>
                <h6>Townhouse</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-condominium.png" alt="Icon" />
                </div>
                <h6>Shop</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="img/icon-luxury.png" alt="Icon" />
                </div>
                <h6>Garage</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes;
