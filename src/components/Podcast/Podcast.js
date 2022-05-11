import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Podcast.scss";
import Robo from "../../assets/robo.png";
import spot from "../../assets/spotlight.webp";
import AudioCard1 from "../Audio_1/AudioCard1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Podcast = () => {
  return (
    <div className="Podcast">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Future Cast Presents!</title>
         <meta
        name="description"
        content="Future Cast is focusing on building a community where people can actually distinguish between what is feasible and then can form decisive opinions"
      />
      <meta
        name="keywords"
        content="thoughts, decision, making, actively, grow, growing"
      />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Image src={spot} className="spot" />
      <Container fluid>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Container fluid className="para_pod_main">
              <Row>
                <Col xs={12} md={6}>
                  <Image src={Robo} fluid />
                </Col>
                <Col xs={12} md={6} className="para_pod">
                  
                  <p className="para_pod_pink">
                    <Link to="/blogs">
                      visit the blog section
                      <i className= "fa fa-arrow-right" />
                    </Link>
                  </p>
                </Col>

                <Col lg={1}></Col>
                <Col lg={10} className="para_pod_details">
                  <h3 className="title">Future Cast and it's three W's</h3>
                  <p>
                    Well, Future Cast is still in its Beta-Phase however is growing itself
                    "Future Cast" initially is my portfolio cum blogging platform where people can
                    write articles which enhances the thought process of the people thinking ability
                    which later can hep take better decisions. Future Cast as of now is only available for this website, but has plans to
                    expand its content spread through conversations, podcasts and social media.
                    <p>Want to know Why "Future Cast" happended?</p>
                  </p>
                </Col>
                <Col lg={1}></Col>
              </Row>
              <AudioCard1 />
            </Container>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Podcast;
