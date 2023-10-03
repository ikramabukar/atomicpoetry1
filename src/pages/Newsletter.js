import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/css/newsletter.css";

export default function Newsletter() {
  const [subscribe, setSubscribe] = useState(false);
  const [error, setError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [newsletterData, setNewsletterData] = useState({
    email: "",
  });

  const validatedEmail = () => {
    const emailPattern = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
    const isValid = emailPattern.test(newsletterData.email);
    setIsValidEmail(isValid);
    setError(!isValid);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (newsletterData.email) {
      setSubscribe(true);
    } else {
      setError(true);
    }
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setNewsletterData({
      ...newsletterData,
      email: enteredEmail,
    });
  };

  return (
    <div>
      <Container lg={6}>
        <Row className="justify-content-center my-5 m-auto">
          <Col className="col-lg-8 col-md-12 col-sm-12">
            <Form className="netlify" class="form">
              <h3 className="title">Newsletter Sign-Up</h3>
              <p className="info-text">
                I would like to receive news and information from Atomic Poetry.
              </p>
              <p className="asterix-text">
                An asterisk (*) denotes a required field.
              </p>
              <Form.Group className="form-group" controlId="first-name">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={newsletterData.firstName}
                />
              </Form.Group>
              <Form.Group className="form-group" controlId="last-name">
                <Form.Label>Last Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  value={newsletterData.lastName}
                />
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicEmail">
                <Form.Label>Email address *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="form-control"
                  onChange={handleEmailChange}
                  onBlur={validatedEmail}
                  value={newsletterData.email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button
                className="btn-primary"
                type="submit"
                onClick={handleSubscribe}
              >
                SUBSCRIBE
              </Button>
              {isValidEmail && subscribe && (
                <p className="subscribe-text">Thank you for subscribing!</p>
              )}
              {error && (
                <p className="subscribe-text">Please enter a valid email.</p>
              )}
              <Col className="col-lg-12 col-md-10 col-sm-10"></Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
