import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

// import styles
import "../assets/css/newsletter.css";

export default function Newsletter() {
  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribe(true);
  };
  return (
    <div>
      <>
        <Container className="lg-6">
          <Row className="justify-content-center my-5 m-auto">
            <Col className="col-lg-8 col-md-12 col-sm-12">
              {/* form*/}

              <Form className="form">
                <h3 className="title">Newsletter Sign-Up </h3>

                {/* icons links*/}

                <Container className="nav-container">
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

                  <span className="icon-links">
                    <a href="https://www.google.com/gmail">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-google"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </a>
                  </span>
                </Container>

                {/*  form text*/}

                <p className="info-text">
                  I would like to receive news and information from Atomic
                  Poetry.
                </p>

                <p className="asterix-text">
                  An asterisk (*) denotes a required field.
                </p>

                {/*  form groups*/}

                <Form.Group className="form-group" controlId="first-name">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group className="form-group" controlId="first-name">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicEmail">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="form-control"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                {/*  button*/}

                <Button
                  className="btn-primary"
                  type="submit"
                  onClick={handleSubscribe}
                >
                  SUBSCRIBE
                </Button>
                {subscribe && (
                  <p className="subscribe-text">Thank you for subscribing!</p>
                )}
                <Col className=" col-lg-12 col-md-10 col-sm-10"></Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}
