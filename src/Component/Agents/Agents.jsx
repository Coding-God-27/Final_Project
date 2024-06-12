import React from 'react';
 // Ensure FontAwesome CSS is properly imported

const PropertyAgents = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Property Agents</h1>
          <p> Trust our property agents to be your reliable partners in navigating the real estate landscape with confidence and ease.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Lily Doe</h5>
                <small>Real Estate Salesperson (RES)</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">John Tade</h5>
                <small>Certified Residential Specialist (CRS)</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Saina Wade</h5>
                <small>Seniors Real Estate Specialist (SRES)</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Akash Chopra</h5>
                <small>Certified Commercial Investment Member (CCIM)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAgents;
