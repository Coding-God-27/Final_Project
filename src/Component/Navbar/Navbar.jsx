import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className="container-fluid nav-bar bg-transparent z-index:1000">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link to="/" className="navbar-brand d-flex align-items-center text-center">
          <div className="icon p-2 me-2">
            <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: '30px', height: '30px' }} />
          </div>
          <h1 className="m-0 text-primary">IbRealEstate</h1>
        </Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            
            <div className="nav-item dropdown">
              
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <Link to="/signin" className="btn btn-primary px-3 d-none d-lg-flex">SignIn / SignUp</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
