import React,{useEffect} from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CustomSimpleCard from "../components/CustomSimpleCard/CustomSimpleCard";
import heroImg from "../images/services/hero-img.png";
import cardImg1 from "../images/services/card-img-1.png";
import cardImg2 from "../images/services/card-img-2.png";
import cardImg3 from "../images/services/card-img-3.png";
import cardImg4 from "../images/services/card-img-4.png";

import "./services.scss";

const servicesArr = [
  {
    img: cardImg1,
    title: "Digital Strategy & Execution",
    text: "When a business starts using an e-commerce platform for its sales or tunes up its website for boosting the customer awareness and loyalty, one thing remains pivotal. This is the Search Engine Optimization. It’s all due to a simple piece of fact that if in the modern competitive world of online commerce you’re not putting enought effort, skills and money – then someone else will and also will snatch all the prospective customers out of your hands. We are determined to compose a master plan for all of your digital activities! Quartz. Mosaic Tiles. Recycled Glass. And, of course, Granite. All are great products for remodeling countertops and backsplashes. You can also pick from a wide selection of either wood or granite products to reface your cabinets. We have everything you need to turn your kitchen into everything you want, and need it to be now!",
  },
  {
    img: cardImg2,
    title: "SEO Copywriting",
    text: "Getting your website’s content geared up and optimized for bigger traffic is our passion and a skill we truly master! It’s crucial not to underestimate the importance of the content (the text) on your company’s website, as currently, in the words of Google’s founder Larry Page – “Content is the King”. From the Search Engine Optimization perspective, this translates to a principle of 1) websites with copy-pasted or irrelevant/insufficient content at the end of the line (SERPs) and 2) Websites with a lot of unique and topic-specific content winning the #1 spot of the 1st Google’s SERP!",
  },
  {
    img: cardImg3,
    title: "Social Media Marketing",
    text: "While most of e-commerce websites and other online businesses tend to focus their marketing efforts either on SEO, email marketing or advertising, many overlook the vital Social Media market. With such social sites as Facebook, Twitter and Instagram altogether having twice as many users as there are people in China, this kind of a niche is still largely ignored and unexplored. We’ll help your company in tapping into this market, giving you all kinds of options to capitalize your gains and sales using smm activities!",
  },
  {
    img: cardImg4,
    title: "Geo-targeted SEO",
    text: "The geo-targeted SEO is all about your company or a multi-lingual website serving few audiences with the same efficiency. Basically, a local Search Engine Optimization is a concept for any multi-language website (preferably an e-commerce one) for optimizing and increasing its rankings in the SERPs of local, specific language-related Google queries. We are masters at improving local SERPs for specific countries and regions!",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container className="py-3 hero-container__services" fluid>
        <Container>
          <Row>
            <Col
              xs={12}
              lg={8}
              className="d-flex flex-column justify-content-center align-items-start"
            >
              <h2 className="hero-header hero-header__primary hero-header__primary--services">
                SEO & Marketing
              </h2>
              <h3 className="hero-header hero-header__secondary hero-header__secondary--services">
                We offer a full-cycle range of SEO & Marketing services
              </h3>
            </Col>
            <Col xs={12} lg={4}>
              <Image src={heroImg} alt="hero-image" fluid />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="py-5">
        {servicesArr.map(({ img, title, text }, idx) => (
          <CustomSimpleCard
            key={idx}
            img={img}
            text={text}
            title={title}
            reverse={idx % 2 === 0 ? false : true}
          />
        ))}
      </Container>
      <Container className="text-center mb-5 pb-5">
        <Row>
          <Col>
            <h4 className="services-slogan services-slogan__primary">
              Hire us to turn your property around and make it stand out!
            </h4>
            <h6 className="services-slogan services-slogan__secondary">
              Tell us more about your project.
            </h6>
            <Button
              variant="primary"
              size="sm"
              className="services-slogan__btn"
            >
              Get a pricing quote
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
