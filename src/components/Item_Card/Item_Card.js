import React from "react";
import { Image } from "react-bootstrap";
import Robo from "../../assets/BlogCard.png";
import "./Item_Card.scss";

const Item_Card = () => {
  return (
    <div className="Item_Card">
      <Image src={Robo} fluid />
      <div className="PodcastHead">
        <h3>Title Of The Podcast</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero
        </p>
      </div>
    </div>
  );
};

export default Item_Card;
