import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "./components/Navbar/Navbar";
import { Col, Row } from "react-bootstrap";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Row className="my-3">
        <Col>
          <NavbarComp />
        </Col>
      </Row>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
