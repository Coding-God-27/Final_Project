import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    try {
      await axios.post('http://localhost:5000/api/contact', formData, {
        headers: {
          'Authorization': token
        }
      });
      alert('Message sent successfully');
    } catch (error) {
      console.error('Error sending message', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Contact Us</h1>
         <p>Our real estate website's contact section offers users a streamlined means to connect with us, featuring essential contact details and a user-friendly form for inquiries, ensuring efficient and effective communication for all real estate-related needs.</p>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-map-marker-alt text-primary"></i>
                    </div>
                    <span>456,ShankarNagar,Bandra,Mumbai</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-envelope-open text-primary"></i>
                    </div>
                    <span>ibrealestate@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-phone-alt text-primary"></i>
                    </div>
                    <span>+91 8463893920</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">
              The Contact section of our real estate website provides a convenient way for users to reach out with inquiries or requests for information. It includes essential contact details such as address, email, and phone number, along with an embedded Google Map for easy location reference. Additionally, users can utilize the provided contact form to send messages directly, ensuring seamless communication with our team.
{' '}
           
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                      <label htmlFor="name" className='m-2'>Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                      <label htmlFor="email" className='m-2'>Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                      <label htmlFor="subject" className='m-2'>Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }} value={formData.message} onChange={handleChange}></textarea>
                      <label htmlFor="message" className='m-2'>Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3 m-1" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
