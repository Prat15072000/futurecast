import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./blog-card.scss";
import Robo from "../../assets/BlogCard.png";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  console.log(data);
  return (
    <div className="blog-card">
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Link to={"/Blog/" + data.id}>
              <Container fluid className="para_pod_main">
                <Row>
                  <Col lg={6} className="p-2">
                    <Image src={data.imageUrl} fluid />
                  </Col>
                  <Col lg={6} className="para_pod">
                    <div className="para_pod_blue">
                      <p className="headcard">{data.title}</p>
                      by
                      <br />
                      {data.author}
                    </div>
                    {data.intro}
                  </Col>
                </Row>
              </Container>
            </Link>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogCard;
