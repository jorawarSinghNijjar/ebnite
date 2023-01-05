import React, {useEffect} from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Feature1 from "../components/Features/Feature-1/Feature1";
// import { TeamDetailsSection } from "../components/TeamDetailsSection/TeamDetailsSection";
import heroImg from "../images/about-hero-img.png";

//Feture 1 Card Images
import CardImg1 from "../images/about/feature-1-card-img-1.png";
import CardImg2 from "../images/about/feature-1-card-img-2.png";
import CardImg3 from "../images/about/feature-1-card-img-3.png";
import CardImg4 from "../images/about/feature-1-card-img-4.png";
import FeaturedProjects from "./../components/FeaturedProjects/FeaturedProjects";

const feature1CardData = [
  {
    title: "360° Full Cycle SEO",
    text: "As broad as the Search Engine Optimization field of activities may be, we’re constantly trying to expand our expertise and add more SEO-related services. Starting with an SEO strategy and SEO copywriting and finishing with an SEO keywords promotion, we’ve got all the process covered, helping you rank higher in Google, Yahoo and Bing!",
    img: CardImg1,
  },
  {
    title: "ROI & KPI Focuses",
    text: "If there’s anything that is detrimental and unaltered in our whole course of work, those are the KPIs and ROI metrics. All the work we do would be useless not compliant with a quantitive goal, set by the client at the start of our works… This means that as far as our agency fee for SEO services is concerned, you will be paying us exclusively for results and for results only!",
    img: CardImg2,
  },
  {
    title: "Deadlines Left Ahead",
    text: "Other agencies hate the deadlines (just as complying with them) so much, that those has  actually become a punchline in the industry. We’d like to state that we have a whole other perception of doing work under the clock and as often as it is possible, we try to work ahead of the schedule, not leaving any deadlines behind on our workflow or activities…",
    img: CardImg3,
  },
  {
    title: "Results-based Fees",
    text: "While many agencies in the industry get paid just for nothing, we practice a different approach. Keeping the end results that you want us to achieve in mind, we’re always focused on getting there. That means – our fee depends on ROI, so we’re a party most interested in your success!",
    img: CardImg4,
  },
];

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Container className="py-3">
        <Row>
          <Col
            sm={12}
            lg={4}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <h2 className="hero-header hero-header__secondary">
              For us efficiency
            </h2>
            <h1 className="hero-header hero-header__primary">
              is Measured in Sales!
            </h1>
            <Button variant="secondary" size="lg" className="hero-btn">
              Learn More
            </Button>
          </Col>
          <Col sm={12} lg={8}>
            <Image src={heroImg} alt="hero-image" fluid />
          </Col>
        </Row>
      </Container>
      <Row>
        <Feature1
          cardData={feature1CardData}
          primaryHeading="Some of Our Key Advantages"
        />
      </Row>
      <Row>
        {/* <TeamDetailsSection
          secondaryHeading="We’d like to introduce you to some of the people who make Ebnite what it is today.
" */}
        />
      </Row>
      <Row>
        <FeaturedProjects />
      </Row>
    </>
  );
};

export default About;
