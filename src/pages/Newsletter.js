import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Newsletter() {
  return (
    <div>
      <>
        <Container className="lg-6">
          <Row className="justify-content-center my-5 m-auto">
            <Col className="col-lg-8 col-md-12 col-sm-12">
              <Form className="border border-3 rounded-7 border-dark bg-body-tertiary">
                <h3
                  className="mb-2 pt-3 pb-3 w-30 mt-4"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: "2px",
                  }}
                >
                  Newsletter Sign-Up{" "}
                </h3>
                <Container
                  className="mb-4 m-auto w-25"
                  style={{
                    display: "flex",
                    columnGap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
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
                  </span>

                  <span>
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
                  </span>
                  <span>
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
                  </span>
                </Container>
                <p
                  className=" w-50 m-auto mb-3"
                  style={{ letterSpacing: "2px", fontWeight: "500" }}
                >
                  I would like to receive news and information from Atomic
                  Poetry.
                </p>

                <p
                  className=" w-50 m-auto mb-3"
                  style={{ letterSpacing: "2px", fontWeight: "300" }}
                >
                  An asterisk (*) denotes a required field.
                </p>
                <Form.Group className="mb-4 w-50 m-auto" controlId="first-name">
                  <Form.Label
                    style={{
                      letterSpacing: "2px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    First Name *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="text-muted"
                  />
                </Form.Group>
                <Form.Group className="mb-4 w-50 m-auto" controlId="first-name">
                  <Form.Label
                    style={{
                      letterSpacing: "2px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Last Name *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="text-muted"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-50 m-auto"
                  controlId="formBasicEmail"
                >
                  <Form.Label
                    style={{
                      letterSpacing: "2px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Email address *
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Button
                  className="border border-dark m-auto mb-5"
                  style={{
                    backgroundColor: "black",
                    display: "block",
                    textAlign: "center",
                    fontWeight: "500",
                    letterSpacing: "2px",
                  }}
                  type="submit"
                >
                  Subscribe
                </Button>
                <Col className=" col-lg-12 col-md-10 col-sm-10">
                  <p
                    className="text-muted w-50 m-auto px-5"
                    style={{ textAlign: "center", fontSize: "small" }}
                  >
                    By clicking "Subscribe," you agree to Atomic Poetry's
                    collection and use of your personal information submitted
                    through this form in accordance with our Terms of Service
                    and Privacy Policy.
                  </p>
                  <br />
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}
