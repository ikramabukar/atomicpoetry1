// bootstrap & router imports

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

// style imports
import "../assets/css/navbar.css";

export default function NavBar() {
  return (
    <div>
      {/* start of the navbar */}

      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-brand">
            Atomic Poetry
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              {/* page links*/}

              <Nav.Link className="nav-link" as={Link} to="/">
                Poetry Search
              </Nav.Link>

              <Nav.Link className="nav-link" as={Link} to="Newsletter">
                Newsletter
              </Nav.Link>

              <Nav.Link className="nav-link" as={Link} to="Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
