import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  return (
    <Container className="text-center my-5">
      {/* Header */}
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="fw-bold text-primary">Stocks Portfolio Tracker for Free</h2>
          <p className="mt-3 text-secondary">
            Track your Demat a/c’s, shares & bonds across brokers for free with <br />
            INDmoney’s stocks tracker.
          </p>
        </Col>
      </Row>

      {/* Button */}
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <Button variant="primary" size="lg">
            Track now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
