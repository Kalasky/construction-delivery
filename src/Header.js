import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">Supply Me Now</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" className="nav-tab">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/premium" className="nav-tab">
              Premium
            </Link>
          </Nav.Link>
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
