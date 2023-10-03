import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/css/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [contact, setContact] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { fullName, message } = formData;

    if (!fullName.trim() || !message.trim()) {
      setErrorMessage("Please fill out Full Name and Message fields.");
    } else {
      setErrorMessage("");
      setContact(true);
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email } = formData;
    if (!emailPattern.test(email)) {
      setErrorMessage("Email is invalid");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Container className="lg-6">
      <Row className="justify-content-center my-5 m-auto">
        <Col className="col-lg-8 col-md-12 col-sm-12">
          <Form className="netlify" class="contact-form">
            <h3 className="contact-title">Contact Atomic Poetry</h3>

            <p className="asterix-text-contact">
              An asterisk (*) denotes a required field.
            </p>
            <Form.Group className="contact-form-group" controlId="full-name">
              <Form.Label className="contact-form-label">
                Full Name *
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Full Name"
                className="contact-form-control"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="contact-form-group"
              controlId="formBasicEmail"
            >
              <Form.Label className="contact-form-label">
                Email address *
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter email"
                className="contact-form-control"
                onChange={handleChange}
                onBlur={validateEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="contact-form-group"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="contact-form-label">Subject:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="subject"
                value={formData.subject}
                className="mb-3"
                onChange={handleChange}
              >
                <option value="I have a general inquiry">
                  I have a general inquiry
                </option>
                <option value="I would like to report a problem with the website">
                  I would like to report a problem with the website
                </option>
                <option value="I would like to make a poetry submission">
                  I would like to make a poetry submission
                </option>
                <option value="I have a question about the Atomic Poetry Newsletter">
                  I have a question about the Atomic Poetry Newsletter
                </option>
              </Form.Select>

              <Form.Label className="contact-form-label">Message *</Form.Label>
              <Form.Control
                className="contact-form-text-area"
                as="textarea"
                name="message"
                value={formData.message}
                rows={4}
                placeholder="Message"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="btn-btn-contact"
              type="submit"
              onClick={handleFormSubmit}
            >
              SUBMIT
            </Button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {contact && (
              <p className="contact-us-text">Thank you for reaching out!</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
