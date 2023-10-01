import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white">
        <Container fluid>
          <Navbar.Brand
            href="PoemGenerator"
            style={{
              fontSize: "23px",
              marginLeft: "25px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#88cf9b",
            }}
          >
            Atomic Poetry
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto"
              style={{
                maxHeight: "100px",
                fontSize: "18px",
                padding: "0, 25px",
                letterSpacing: "3px",
              }}
              navbarScroll={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxHeight: "150px",
              }}
            >
              <Nav.Link
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#88cf9b",
                }}
                as={Link}
                to="/"
              >
                Poem Generator
              </Nav.Link>
              <Nav.Link
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#88cf9b",
                }}
                as={Link}
                to="About"
              >
                About
              </Nav.Link>
              <Nav.Link
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#88cf9b",
                }}
                as={Link}
                to="Newsletter"
              >
                Newsletter
              </Nav.Link>
              <Nav.Link
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#88cf9b",
                }}
                as={Link}
                to="Contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
