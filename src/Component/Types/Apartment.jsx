import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApartmentDetails.css';

const ApartmentDetails = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Sample apartment data with image URLs
  const apartments = [
    { id: 1, name: 'Spacious Apartment', description: 'This is a spacious apartment with modern amenities.', price: '$1000/month', image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Luxury Loft', description: 'Experience luxury living in this stylish loft.', price: '$1500/month', image: 'https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Cozy Studio', description: 'Perfect for individuals or couples, this studio offers comfort and convenience.', price: '$800/month', image: 'https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Modern Penthouse', description: 'A luxurious penthouse with stunning city views.', price: '$2000/month', image: 'https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Charming Cottage', description: 'A quaint cottage with a lovely garden.', price: '$900/month', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Urban Flat', description: 'A stylish flat in the heart of the city.', price: '$1200/month', image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 7, name: 'Suburban House', description: 'A spacious house in a quiet suburb.', price: '$1400/month', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2sfueQf8giwDuv_VjUXMbw3q4mEMupCHTg&s' },
    { id: 8, name: 'Beachfront Condo', description: 'A beautiful condo with direct beach access.', price: '$1800/month', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6GS0Lwb1lFoeKmY6IwLSli2MqPxjQHp5Gw&s' },
    { id: 9, name: 'Mountain Cabin', description: 'A cozy cabin with breathtaking mountain views.', price: '$1100/month', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7PctvU_yTXepu-7AO2xJAPqOriSamYTYig&s' }
  ];

  const handleContactModalShow = (apartment) => {
    setSelectedApartment(apartment);
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
      <h1 className="title">Apartment Details</h1>
      <div className="row">
        {apartments.map((apartment) => (
          <div key={apartment.id} className="col-md-4 mb-4">
            <Card className="h-100 apartment-card">
              <Card.Img variant="top" src={apartment.image} alt={apartment.name} />
              <Card.Body>
                <Card.Title>{apartment.name}</Card.Title>
                <Card.Text>{apartment.description}</Card.Text>
                <Card.Text>Price: {apartment.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="primary" onClick={() => handleContactModalShow(apartment)}>
                  Contact Agent
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => toggleFavorite(apartment.id)}
                >
                  {favorites.includes(apartment.id) ? 'Unfavorite' : 'Favorite'} &#10084;
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
            <p>ThankYou!Agent will soon reach to you.</p>
          ) : (
            <>
              <p>Contact agent for: {selectedApartment?.name}</p>
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

export default ApartmentDetails;
