import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Features(){
  return (
    <Container>
      {/* Heading */}
      <h3 className="text-center my-4 text-primary">
        Features of INDmoney Stock Portfolio Tracker
      </h3>

      {/* Card Grid */}
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Track Investments</Card.Title>
              <Card.Text>
                Easily track your stock investments in real-time, all in one place.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Portfolio Insights</Card.Title>
              <Card.Text>
                Get detailed insights and analytics on your portfolio's performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Tax Optimization</Card.Title>
              <Card.Text>
                Save money with tax optimization strategies for your investments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Goal Tracking</Card.Title>
              <Card.Text>
                Set and achieve your financial goals with personalized recommendations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Secure & Private</Card.Title>
              <Card.Text>
                Your data is safe with bank-level encryption and privacy measures.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Comprehensive Reports</Card.Title>
              <Card.Text>
                Download comprehensive reports for deeper portfolio analysis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
