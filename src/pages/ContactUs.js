import React,{useEffect} from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import MapImage from "../components/MapImage/MapImage";
import "./contact-us.scss";

const ContactUs = () => {
  const address = "11559 Ventura Boulevard, Studio City, CA 91604";
  const phoneNumber = "+1 323.635.6548";
  const email = "gurjeet@ebnite.com";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Container className="page-padding">
      <Row className="gx-5">
        <Col className="order-md-2 mb-3">
          <MapImage />
          <p className="my-3">
            <strong>Address:</strong>
            {address}
          </p>
          <p className="my-3">
            <strong>Phone:</strong>
            {phoneNumber}
          </p>
          <p className="my-3">
            <strong>Email:</strong>
            {email}
          </p>
        </Col>
        <Col lg={6} className="order-md-1 mb-3">
          <div className="mb-4">
            <h2 className="contact-form-heading contact-form-heading__primary">
              Contact Us
            </h2>
            <h6 className="contact-form-heading contact-form-heading__secondary">
              Our friendly team would love to hear from you.
            </h6>
          </div>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="first-name" type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="first-name" type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control name="phone-number" type="tel" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control name="company" type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control name="subject" type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="message"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid">
              <Button variant="secondary" className="text-white" type="submit">
                Send
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
