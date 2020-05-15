import React from "react";
import Logo from "../../assests/logo.png";
import { Navbar, Form, Nav, FormControl, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { NavbarWrapper } from "./style";
const navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <Navbar expand="lg">
          <Link exact to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink exact to="/trending" className="nav-link">
                Trending
              </NavLink>
              <NavLink exact to="/tvShows" className="nav-link">
                TV Shows
              </NavLink>
            </Nav>
            <Form inline>
              <FaSistrix />
              <FormControl
                type="text"
                placeholder="Movie"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavbarWrapper>
  );
};

export default navbar;
