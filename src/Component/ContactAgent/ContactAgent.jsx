import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ContatctAgent.css';  // Import the custom CSS file

const ContactSection = () => {
  const [showCallModal, setShowCallModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const handleCallModalClose = () => setShowCallModal(false);
  const handleCallModalShow = () => setShowCallModal(true);

  const handleAppointmentModalClose = () => setShowAppointmentModal(false);
  const handleAppointmentModalShow = () => setShowAppointmentModal(true);

  return (
    <div className="container-xxl py-5 contact-section">
      <div className="container">
        <div className="bg-light rounded p-3">
          <div className="bg-white rounded p-4" style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt="Call to action" />
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="mb-4">
                  <h1 className="mb-3">Contact With Our Certified Agent</h1>
                  <p>Our team of dedicated property agents is here to provide personalized and professional assistance throughout your property journey.</p>
                </div>
                <div className="d-flex">
                  <Button onClick={handleCallModalShow} className="btn btn-primary py-3 px-4 me-3"> {/* Added 'me-3' class */}
                    <i className="fa fa-phone-alt me-2"></i>Make A Call
                  </Button>
                  <Button onClick={handleAppointmentModalShow} className="btn btn-dark py-3 px-4">
                    <i className="fa fa-calendar-alt me-2"></i>Get Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call Modal */}
      <Modal show={showCallModal} onHide={handleCallModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make A Call</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a dummy call. No actual call is being made.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCallModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Appointment Modal */}
      <Modal show={showAppointmentModal} onHide={handleAppointmentModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Preferred Appointment Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAppointmentModalClose}>
            Close
          </Button>
          <Button variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactSection;
