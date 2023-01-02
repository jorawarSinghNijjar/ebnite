import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

import employeePhoto1 from "../../images/employee-1.jpg";
import employeePhoto2 from "../../images/employee-2.jpg";
import employeePhoto3 from "../../images/employee-3.jpg";
import employeePhoto4 from "../../images/employee-4.jpg";

import "./team-details-section.scss";
import EmployeeDetailsCard from "./../EmployeeDetailsCard/EmployeeDetailsCard";

const employeeCardData = [
  {
    name: "George Martin",
    title: "CEO",
    profilePhoto: employeePhoto1,
    profileText:
      "Mr. Buoyega was born in one of Detroit’s poorest blocks, all before pursuing his successful managerial career in the future. For him, the breakthrough happened when he was able to get on Harvard ",
  },
  {
    name: "Varinder Singh",
    title: "CFO",
    profilePhoto: employeePhoto2,
    profileText:
      "A talented and creative leader, Kenneth is known among his colleagues for how good his organizing and team leading skills are… Working priorly for a number of American and International multi-billion dollar ",
  },
  {
    name: "Joslyn Mcgrath",
    title: "SD I",
    profilePhoto: employeePhoto3,
    profileText:
      "Being as a devoted family man as he is, it is incredible how Jonathan has time left for managing multi-million dollar contracts, satisfying all of our clients and managing a vast team of professionals under his  ",
  },
  {
    name: "Jeff Jameson",
    title: "PM",
    profilePhoto: employeePhoto4,
    profileText:
      "Originally from London, at one point of his sophomore college year, Martin decided to turn the tables for his career and travel to the US, to try and get a Harvard MBA degree… Eventually, he succeeded in that, ",
  },
];

export const TeamDetailsSection = ({ secondaryHeading }) => {
  return (
    <Container className="feature-container feature-container--5">
      <Row>
        <Col xs={10} lg={10} className="mx-auto">
          <h2 className="feature-heading feature-heading__primary pb-2 text-center border-bottom">
            Meet Our Team
          </h2>
          <h5 className="feature-heading feature-heading__secondary text-center text-highlight">
            {secondaryHeading}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={10} className="mx-auto">
          {employeeCardData.map(
            ({ name, title, profilePhoto, profileText }, idx) => (
              <Col key={idx} xs={12} >
                <EmployeeDetailsCard
                  name={name}
                  title={title}
                  profilePhoto={profilePhoto}
                  profileText={profileText}
                  mirror={idx % 2 === 0 ? "" : "mirror"}
                />
              </Col>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};
