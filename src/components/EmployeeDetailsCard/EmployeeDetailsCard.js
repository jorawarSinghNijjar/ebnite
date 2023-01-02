import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./employee-details-card.scss";

const EmployeeDetailsCard = ({
  name,
  title,
  profilePhoto,
  profileText,
  mirror,
}) => {
  console.log(mirror);
  return (
    <Card
      className={`employee-details-card text-center py-4 px-4 bg-transparent ${mirror}`}
      style={{ width: "100%", border: "none" }}
      bsPrefix="employee-details-card"
    >
      <Row style={{ width: "100%" }} className="align-items-end">
        <Col sm={3} lg={3}>
          <Card.Img
            variant="top"
            src={profilePhoto}
            className="mx-auto employee-details-card-img"
            bsPrefix="employee-details"
          />
        </Col>
        <Col sm={9} lg={9}>
          <Card.Body
            className="employee-details-card-body"
            bsPrefix="employee-details"
          >
            <Row className="d-flex flex-row justify-content-start mb-2">
              <Col sm={12}>
                <Card.Title
                  className={`employee-details-card-body__name ${
                    mirror ? "mirror" : ""
                  }`}
                  style={{ textAlign: mirror ? "right" : "left" }}
                >
                  {name}
                </Card.Title>
              </Col>
              <Col>
                <Card.Title
                  className={`employee-details-card-body__position ${
                    mirror ? "mirror" : ""
                  }`}
                  style={{ textAlign: mirror ? "right" : "left" }}
                >
                  {title}
                </Card.Title>
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <p
                  className={`employee-details-card-body__text ${
                    mirror ? "mirror" : ""
                  }`}
                  style={{ textAlign: mirror ? "right" : "left" }}
                >
                  {profileText}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EmployeeDetailsCard;
