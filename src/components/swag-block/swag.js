import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SwagImage from "../../assets/SwagImg.png";
import "./swag.scss";

const swag = () => {
  return (
    <Container fluid className="swag_block">
      <div className="swag_head">Get Some Swag!</div>
      <Row>
        {/* <Col lg={1}></Col> */}
        <Col
          xs={{ order: "last", offset: "0" }}
          lg={{ span: "3", order: "first", offset: "1" }}
        >
          <Image src={SwagImage} fluid />
        </Col>
        <Col lg={7} className="swag_section_text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
          <Link to="/Swag">
            <div className="swag_section_btn">Learn more</div>
          </Link>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default swag;
