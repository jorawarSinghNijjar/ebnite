import React from "react";
import { Button, Container, Image } from "react-bootstrap";

import HeroImg from "../../images/hero.png";
import "./hero.scss";

const Hero = () => {
  return (
    <Container className="hero-img-container">
      <Image src={HeroImg} fluid></Image>
      <div className="hero-header-container">
        <h1 className="mb-2 hero-header hero-header__primary">Mid &amp; Long Term</h1>
        <h1 className="mb-2 hero-header hero-header__secondary">Promotional campaigns</h1>
      </div>

      <Button variant="secondary" size="lg" className="hero-btn">Learn More</Button>
    </Container>
  );
};

export default Hero;
