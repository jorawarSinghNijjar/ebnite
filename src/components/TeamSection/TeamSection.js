import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

import employeePhoto1 from "../../images/employee-1.jpg";
import employeePhoto2 from "../../images/employee-2.jpg";
import employeePhoto3 from "../../images/employee-3.jpg";
import employeePhoto4 from "../../images/employee-4.jpg";

import "./team-section.scss";

const employeeCardData = [
  { name: "George Martin", title: "CEO", profilePhoto: employeePhoto1, fb:"#", twitter:"#", linkdin:"#", insta:"#"  },
  { name: "Varinder Singh", title: "CFO", profilePhoto: employeePhoto2, fb:"#", twitter:"#", linkdin:"#", insta:"#" },
  { name: "Joslyn Mcgrath", title: "SD I", profilePhoto: employeePhoto3, fb:"#", twitter:"#", linkdin:"#", insta:"#" },
  { name: "Jeff Jameson", title: "PM", profilePhoto: employeePhoto4, fb:"#", twitter:"#", linkdin:"#", insta:"#"  },
];

export const TeamSection = () => {
  return (
    <Container className="feature-container feature-container--5" fluid>
      <h2 className="feature-heading feature-heading__primary pb-2 text-center border-bottom">
        Meet Our Team
      </h2>
      <h5 className="feature-heading feature-heading__secondary text-center text-highlight">
        We Have a Range of Sales-Boosting Marketing Services
      </h5>
      <Row>
        {employeeCardData.map(({ name, title, profilePhoto,fb, twitter, linkdin, insta },idx) => (
          <Col key={idx}>
            <EmployeeCard
              name={name}
              title={title}
              profilePhoto={profilePhoto}
              socialLinks={{fb,twitter,linkdin,insta}}
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center my-5 mx-auto">
        <Col xs={12} className="text-center">
          <Button variant="secondary" size="lg" className="text-white mx-auto">
            View All
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
