import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand>
        <Link to="/"
          className={
            window.location.pathname === "/" || window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }>
          <h3>John Zurakowski</h3>
        </Link>
        
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto" />
        <Nav>
          <Link to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }><h6>About</h6>
          </Link>
          <Link to="/education"
            className={
              window.location.pathname === "/education"
                ? "nav-link active"
                : "nav-link"
            }><h6>Education</h6>
          </Link>
          <Link to="/experience"
            className={
              window.location.pathname === "/experience"
                ? "nav-link active"
                : "nav-link"
            }><h6>Experience</h6>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;