import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import im3 from "../../assets/BlogCard.png";

import "./Project-Card.scss";

const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    <Card className="ProjectCard">
      <Link to={"/Blog/" + data.id}>
        <Card.Img variant="top" src={data.imageUrl} />
        <Card.Body className="bg">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>Title and short description of your project</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProjectCard;
