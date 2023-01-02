import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import featuredProjectImg1 from "../../images/about/featured-project-img-1.png";
import featuredProjectImg2 from "../../images/about/featured-project-img-2.png";
import featuredProjectImg3 from "../../images/about/featured-project-img-3.png";
import featuredProjectImg4 from "../../images/about/featured-project-img-4.png";
import featuredProjectImg5 from "../../images/about/featured-project-img-5.png";
import featuredProjectImg6 from "../../images/about/featured-project-img-6.png";
import "./featured-projects.scss";

const projectsArr = [
  { bgColor: "#8AC0FF",icon: featuredProjectImg1 },
  { bgColor: "#CBB8CB",icon: featuredProjectImg2 },
  { bgColor: "#FFDCC0",icon: featuredProjectImg3 },
  { bgColor: "#C9BDFF",icon: featuredProjectImg4 },
  { bgColor: "#69BDFA",icon: featuredProjectImg5 },
  { bgColor: "#EEBBC0",icon: featuredProjectImg6 },
];

const FeaturedProjects = () => {
  return (
    <Container className="py-5">
      <Row >
        <Col xs={10} lg={10} className="mx-auto">
          <h2 className="feature-heading feature-heading__primary pb-2 text-center">
            Featured Projects
          </h2>
        </Col>
      </Row>
      <Row style={{width: "80%",}} className="mx-auto">
        {projectsArr.map(({ bgColor, icon }, idx) => (
          <Col key={idx} xs={12} md={6} lg={4}>
            <div className="project-box" style={{backgroundColor: bgColor}}>
              <Image
                src={icon}
                alt="project-icon"
                className="featured-project-icon"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
