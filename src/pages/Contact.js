import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/contact.css";
import { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setContact(true);
  };

  return (
    <>
      <Container className="lg-6">
        <Row className="justify-content-center my-5 m-auto">
          <Col className="col-lg-8 col-md-12 col-sm-12">
            <Form className="contact-form">
              <h3 className=" contact-title">Contact Atomic Poetry</h3>
              <Container className="contact-container-container" style={{}}>
                <span className="icon-links">
                  <a
                    href="https://www.facebook.com/your-facebook-profile-url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </span>

                <span className="icon-links">
                  <a
                    href="https://www.linkedin.com/in/your-linkedin-profile-url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </span>

                <span className="icon-links">
                  <a
                    href="https://twitter.com/i/flow/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                  </a>
                </span>
              </Container>

              <p className="asterix-text">
                {" "}
                An asterisk (*) denotes a required field.
              </p>

              {/* form groups */}

              <Form.Group className="contact-form-group" controlId="first-name">
                <Form.Label className="contact-form-label">
                  Full Name *
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="contact-form-control"
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
                  placeholder="Enter email"
                  className="contact-form-control"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <br />
              <Form.Group
                className="contact-form-group"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="contact-form-label">Subject:</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  <option>I have a general inquiry</option>
                  <option value="1">
                    I would like to report a problem with the website
                  </option>
                  <option value="2">
                    I would like to make a poetry submission
                  </option>
                  <option value="3">
                    I have a question about the Atomic Poetry Newsletter{" "}
                  </option>
                </Form.Select>

                <Form.Label className="contact-form-label">
                  Message *
                </Form.Label>
                <Form.Control
                  className="contact-form-text-area"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>

              {/* button */}
              <Button
                className=" btn-btn-contact"
                type="submit"
                onClick={handleClick}
              >
                SUBMIT
              </Button>
              {contact && (
                <p className="contact-us-text">Thank you for reaching out!</p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
