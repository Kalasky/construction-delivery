import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">Supply Me Now</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/premium">Premium</Nav.Link>
          {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">Social</Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
