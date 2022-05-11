import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BW_Head.scss";

const BW_Head = ({ t1, t2, k }) => {
  return (
    <div className="BW_Head">
      {k == 1 ? (
        <Container fluid>
          <Row>
            <Col className={`t1 ri`}>{t1}</Col>
            <Col className={`t2 le`}>{t2}</Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Row>
            <Col className={`t2 ri`}>{t2}</Col>
            <Col className={`t1 le`}>{t1}</Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default BW_Head;
