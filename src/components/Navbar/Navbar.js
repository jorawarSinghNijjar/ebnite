import React, { useState } from "react";
import { Container, Nav, Navbar, Form, Row, Col, Image } from "react-bootstrap";

import { Link, useLocation, useHistory } from "react-router-dom";
import "./navbar.scss";
import MenuToggler from "../MenuToggler/MenuToggler";

import MediaQuery from "react-responsive";
import { TransitionGroup } from "react-transition-group";

import Logo from "../../images/logo/logo.png"

const NavbarComp = () => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const onTap = (e) => {
    setDisplaySearchBar(true);
  };

  const {pathname} = useLocation();

  return (
    <>
      <Container>
        <Navbar bg="light" expand="md">
          <Navbar.Brand as={Link} to="/" className="text-primary" style={{width: "100px"}}>
            <Image src={Logo} alt="logo" fluid/>
          </Navbar.Brand>
          <MediaQuery maxWidth={768}>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              bsPrefix="c"
              className="c-navbar-toggler"
            >
              <MenuToggler lineColor="#1E3E71" backgroundColor="#EBF1FA" />
            </Navbar.Toggle>
          </MediaQuery>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              bsPrefix="c"
              className="mx-auto d-flex justify-content-around c-navbar-nav"
            >
              <Nav.Link
                as={Link}
                to="/about"
                bsPrefix="c"
                className={`c-nav-link ${pathname === "/about" ? "active": ""}`}
                
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                bsPrefix="c"
                className={`c-nav-link ${pathname === "/services" ? "active": ""}`}
              >
                Services
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/blog"
                bsPrefix="c"
                className={`c-nav-link ${pathname === "/blog" ? "active": ""}`}
              >
                Blog
              </Nav.Link> */}
              <Nav.Link
                as={Link}
                to="/contact-us"
                bsPrefix="c"
                className={`c-nav-link ${pathname === "/contact-us" ? "active": ""}`}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex search-form">
            <Form.Control
              type="search"
              className="my-2"
              placeholder="Search"
              aria-label="Search"
            />

            {/* <Form.Label>
      {!displaySearchBar ? (
        <i
          className="fa fa-search text-primary c-pointer"
          onClick={onTap}
        ></i>
      ) : null}
    </Form.Label> */}
          </Form>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarComp;
