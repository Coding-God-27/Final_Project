import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const VillaDetails = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [submitted, setSubmitted] = useState(false);

 
  const villas = [
    { id: 1, name: 'Seaside Villa', description: 'A luxurious villa overlooking the ocean.', price: '$2500/month', image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Mountain Retreat', description: 'Escape to this cozy villa nestled in the mountains.', price: '$1800/month', image: 'https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Lakefront Villa', description: 'Enjoy serene lake views from this stunning villa.', price: '$2200/month', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8fDA%3D' },
    { id: 4, name: 'Countryside Villa', description: 'Experience the charm of the countryside in this elegant villa.', price: '$1900/month', image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Garden Villa', description: 'Relax in the lush garden of this beautiful villa.', price: '$2000/month', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww' },
    { id: 6, name: 'Space Villa', description: 'Relax in the lush garden of this beautiful villa.', price: '$4000/month', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhfGVufDB8fDB8fHww' }

  ];


  const handleContactModalShow = (villa) => {
    setSelectedVilla(villa);
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
      <h1 className="title">Villa Details</h1>
      <div className="row">
        {villas.map((villa) => (
          <div key={villa.id} className="col-md-4 mb-4">
            <Card className="h-100 villa-card">
              <Card.Img variant="top" src={villa.image} alt={villa.name} />
              <Card.Body>
                <Card.Title>{villa.name}</Card.Title>
                <Card.Text>{villa.description}</Card.Text>
                <Card.Text>Price: {villa.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <Button variant="primary" onClick={() => handleContactModalShow(villa)}>
                  Contact Agent
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => toggleFavorite(villa.id)}
                >
                  {favorites.includes(villa.id) ? 'Unfavorite' : 'Favorite'} &#10084;
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
            <p>Thank you! Agent will soon reach out to you.</p>
          ) : (
            <>
              <p>Contact agent for: {selectedVilla?.name}</p>
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

export default VillaDetails;
