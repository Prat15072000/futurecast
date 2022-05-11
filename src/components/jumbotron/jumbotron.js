import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";
import "./jumbotron.scss";

const jumbotron = ({ img_center, check }) => {
  console.log(img_center);
  return (
    <div className="jumbo">
      {/* <Image src={jumboImg} fluid /> */}
      <Image src={img_center} className="img_jumbo" />
      {check ? (
        <div className="overlay_box2">
          We at Future Cast is trying to bring up convestations, blogs that would help the young minds grow their knowledge
          to build a better India and grow themselves as better humans. If you are reading this, I want you to support us by sharing this among your network.
        </div>
      ) : (
        <Fragment />
      )}
    </div>
  );
};

export default jumbotron;
