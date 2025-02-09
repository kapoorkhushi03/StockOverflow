import React from 'react';
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <Container fluid className="p-3 my-5">
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            fluid
            alt="Phone image"
          />
        </Col>

        <Col md={6}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size="lg" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="lg" />
            </Form.Group>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#!">Forgot password?</a>
            </div>

            <Button className="mb-4 w-100" size="lg" variant="primary">
              Sign in
            </Button>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <Button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: '#3b5998' }}
              variant="primary"
            >
              <FaFacebookF className="mx-2" />
              Continue with Facebook
            </Button>

            <Button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: '#55acee' }}
              variant="primary"
            >
              <FaTwitter className="mx-2" />
              Continue with Twitter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
