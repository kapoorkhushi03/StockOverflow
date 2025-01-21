import React from 'react';
import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';

function App() {
  return (
    <Container fluid className="p-5">
      <Card className="text-black m-5" style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md={10} lg={6} className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaUser className="me-3" height="15px" />
                <Form.Control type="text" placeholder="Your Name" className="w-100" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaEnvelope className="me-3"height="15px" />
                <Form.Control type="email" placeholder="Your Email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaLock className="me-3" height="15px" />
                <Form.Control type="password" placeholder="Password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaKey className="me-3" height="15px" />
                <Form.Control type="password" placeholder="Repeat your password" />
              </div>

              <div className="mb-4">
                <Form.Check type="checkbox" label="Subscribe to our newsletter" />
              </div>

              <Button className="mb-4" height="15px" variant="primary">
                Register
              </Button>
            </Col>

            <Col md={10} lg={6} className="order-1 order-lg-2 d-flex align-items-center">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
                alt="Registration"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
