import React from "react";
import "./More_Like.scss";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../data/blog.data";
import ProjectCard from "../Project-Card/Project-Card";

const More_Like = () => {
  const arr = [];
  while (arr.length < 3) {
    var candidateInt = Math.floor(Math.random() * 7);
    console.log(candidateInt);
    if (arr.indexOf(candidateInt) === -1) {arr.push(candidateInt); console.log("This if block got excuted")};
  }
  return (
    <div className="More_Like">
       <h3 className="More_like_head">Read Some of our Blogs</h3>
      <hr />
      <Container fluid>
        <Row>
          <Col lg={3}>
            <ProjectCard data={data.items[arr[0]]} />
          </Col>
          <Col lg={1}></Col>
          <Col lg={3}>
            <ProjectCard data={data.items[arr[1]]} />
          </Col>
          <Col lg={1}></Col>
          <Col lg={3}>
            <ProjectCard data={data.items[arr[2]]} />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default More_Like;
