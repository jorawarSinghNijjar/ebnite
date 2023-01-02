import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import "./feature3.scss";
import TickIcon from "../../../images/tick-icon.svg";

const Feature3 = () => {
  return (
    <Container className="feature-container feature-container--3" fluid>
      <Row>
        <Col md={12} lg={6}>
          <Row className="d-flex flex-column justify-content-between">
            <Col>
              <h2 className="feature-heading feature-heading__primary feature-heading__primary--3 text-center">
                Our History
              </h2>
            </Col>
            <Col style={{zIndex: "2"}}>
              <div className="feature-3-image"></div>
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6}>
          <Stack className="px-1 py-4" gap={3}>
            <Col>
              <p className="lead text-primary text-1">
                Actually, when we’ve been just starting our agency up, we were a
                little concerned about it being limited just to Search Engines
                Optimization.
              </p>
            </Col>
            <Col>
              <p className="text-dark text-2">
                That made us expand our services list to include other Digital
                Marketing activities. Then we felt, that we can offer a wider
                scope of extra services within our current list, which we
                eventually did by extending it horizontally.
              </p>
            </Col>
            <Col>
              <p className="text-dark text-2">
                Altogether, as a few years ago we’ve finally become the agency
                we were aiming to become, we’ve compiled a few core work
                principles that we still value today, such as:
              </p>
            </Col>
            <Stack gap={2}>
              <div className="d-flex align-items-center">
                <Image
                  src={TickIcon}
                  alt="icon"
                  className="icon-size-1"
                ></Image>
                <p className="text-primary list-text px-2">There’s no excuse for not achieving a result</p>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src={TickIcon}
                  alt="icon"
                  className="icon-size-1"
                ></Image>
                <p className="text-primary list-text px-2">Deadlines are meant to be left ahead, not behind</p>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src={TickIcon}
                  alt="icon"
                  className="icon-size-1"
                ></Image>
                <p className="text-primary list-text px-2">Lower fees for the same quality can be an advantage for everyone</p>
              </div>
            </Stack>
          </Stack>
        </Col>
      </Row>
      {/* <div className="bottom-style-box">

      </div> */}
    </Container>
  );
};

export default Feature3;
