import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeDetails = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const homes = [
    { id: 1, name: 'Modern Apartment', description: 'A sleek and stylish apartment in the city center.', price: '$3000/month', image: 'https://img.freepik.com/premium-photo/exterior-modern-house-with-yellow-facade-generative-ai_873385-15388.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=sph' },
    { id: 2, name: 'Suburban House', description: 'Spacious house with a beautiful backyard in the suburbs.', price: '$2500/month', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=sph' },
    { id: 3, name: 'Cozy Cottage', description: 'Quaint cottage surrounded by nature, perfect for a retreat.', price: '$1800/month', image: 'https://img.freepik.com/premium-photo/3d-rendering-modern-classic-house-with-luxury-garden_105762-111.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=sph' },
    { id: 4, name: 'Luxury Penthouse', description: 'Experience luxury living with stunning city views.', price: '$5000/month', image: 'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=sph' },
    { id: 5, name: 'Rustic Cabin', description: 'Escape to a cozy cabin in the woods for a peaceful getaway.', price: '$1500/month', image: 'https://img.freepik.com/free-psd/modern-farmhouse-meadow-hill-generative-ai_587448-2226.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=sph' },
    { id: 6, name: 'Beach House', description: 'Relax and unwind in a beachfront house with ocean views.', price: '$4000/month', image: 'https://img.freepik.com/premium-photo/modern-house-with-sky_35076-483.jpg?size=626&ext=jpg&ga=GA1.1.1325821436.1717148593&semt=sph' }
  ];

  const handleContactModalShow = (home) => {
    setSelectedHome(home);
    setShowContactModal(true);
  };

  const handleContactModalClose = () => {
    setShowContactModal(false);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="container container-md">
      <h1 className="title">Home Details</h1>
      <div className="row">
        {homes.map((home) => (
          <div key={home.id} className="col-md-4 mb-4">
            <Card className="h-100 home-card">
              <Card.Img variant="top" src={home.image} alt={home.name} />
              <Card.Body>
                <Card.Title>{home.name}</Card.Title>
                <Card.Text>{home.description}</Card.Text>
                <Card.Text>Price: {home.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="primary" onClick={() => handleContactModalShow(home)}>
                  Contact
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => toggleFavorite(home.id)}
                >
                  {favorites.includes(home.id) ? 'Unfavorite' : 'Favorite'} &#10084;
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      <Modal show={showContactModal} onHide={handleContactModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <p>Thank you! Our agent will reach out to you soon.</p>
          ) : (
            <>
              <p>Contact agent for: {selectedHome?.name}</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formPhone" className="mt-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Enter your phone number" required />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleContactModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HomeDetails;
