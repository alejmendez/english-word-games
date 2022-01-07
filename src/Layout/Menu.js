import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="ms-3">English word games</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/memory">Memory</Nav.Link>
          <Nav.Link as={Link} to="/word-pairs">Word Pairs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export {
  Menu,
}
