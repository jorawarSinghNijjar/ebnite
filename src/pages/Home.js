import React, {useEffect} from "react";
import { Col, Row, Container } from "react-bootstrap";

import Hero from "../components/Hero/Hero";

// import { TeamSection } from "../components/TeamSection/TeamSection";
import Feature1 from "../components/Features/Feature-1/Feature1";
import Feature2 from "../components/Features/Feature-2/Feature2";
import Feature3 from "../components/Features/Feature-3/Feature3";
import Feature4 from "../components/Features/Feature-4/Feature4";
import Feature5 from "../components/Features/Feature-5/Feature5";

import CardImg1 from "../images/card-img-1.png";
import CardImg2 from "../images/card-img-2.png";
import CardImg3 from "../images/card-img-3.png";
import CardImg4 from "../images/card-img-4.png";
import CardImg5 from "../images/card-img-5.png";
import CardImg6 from "../images/card-img-6.png";

const feature1CardData = [
  {
    title: "Digital Strategy & Execution",
    text: "We are determined to compose a master plan for all of your digital activities!",
    img: CardImg1,
  },
  {
    title: "SEO Copywriting",
    text: "Getting your website’s content geared up and optimized for bigger traffic is our passion.",
    img: CardImg2,
  },
  {
    title: "Social Media Marketing",
    text: "Working with the New Media promotional campaigns is the newest promo tool we use",
    img: CardImg3,
  },
  {
    title: "SEO Strategy",
    text: "Our team will help you achieve your SEO goals for business, by optimizing your web content!",
    img: CardImg4,
  },
  {
    title: "Geo-targeted SEO",
    text: "We are masters at improving local SERPs for specific countries and languages!",
    img: CardImg5,
  },
  {
    title: "PPC & Media Buying",
    text: "When it comes to either running a contextual ads campaign or buying media, we’re the best!",
    img: CardImg6,
  },
 
];

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Hero />
          </Col>
        </Row>
      </Container>
      <Feature1 cardData={feature1CardData} primaryHeading="Featured Services" secondaryHeading="We Have a Range of Sales-Boosting Marketing Services"/>
      <Feature2 />
      <Feature3 />
      <Feature4 />
      {/* <TeamSection /> */}
      <Feature5 />
    </>
  );
};

export default Home;
