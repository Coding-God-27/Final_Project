import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Clients = () => {
  return (
    <div className="container-xxl py-5 bg-light">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>As an investor, I value expertise and market insight. The team provided exceptional guidance and helped me secure several lucrative properties. Their knowledge and commitment are unmatched.</p>
        </div>
        <Carousel className="wow fadeInUp" data-wow-delay="0.1s" interval={2000}>
          <Carousel.Item>
            <div className="testimonial-item bg-light rounded p-3 shadow-sm">
              <div className="bg-white border rounded p-4">
                <div className="d-flex align-items-center">
                  <p className="mb-0">"We were looking to downsize after retirement and the agents provided outstanding support. They showed us options that fit our lifestyle and made the transition smooth and hassle-free. Truly exceptional service."</p>
                  <img className="img-fluid flex-shrink-0 rounded ms-3" src="img/testimonial-1.jpg" style={{ width: "45px", height: "45px" }} alt="Anne K." />
                </div>
                <div className="ps-3 mt-2">
                  <h6 className="fw-bold mb-1">Anne K.</h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-item bg-light rounded p-3 shadow-sm">
              <div className="bg-white border rounded p-4">
                <p className="mb-0">"Relocating for work was stressful, but the agents here made finding a new home seamless. They understood my needs and found the perfect place for my family. Highly recommend their services!"</p>
                <div className="d-flex align-items-center mt-2">
                  <img className="img-fluid flex-shrink-0 rounded ms-3" src="img/testimonial-2.jpg" style={{ width: "45px", height: "45px" }} alt="Michael B" />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Michael B</h6>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-item bg-light rounded p-3 shadow-sm">
              <div className="bg-white border rounded p-4">
                <div className="d-flex align-items-center">
                  <p className="mb-0 ">"Finding our first home seemed daunting, but the agents at IbrealEstate made it an enjoyable experience. Their professionalism and dedication were evident from start to finish. We couldn't be happier with our new home!"</p>
                  <img className="img-fluid flex-shrink-0 rounded ms-3" src="img/testimonial-3.jpg" style={{ width: "45px", height: "45px" }} alt="Roger.T" />
                </div>
                <div className="ps-3 mt-2">
                  <h6 className="fw-bold mb-1">Roger.T</h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Clients;
