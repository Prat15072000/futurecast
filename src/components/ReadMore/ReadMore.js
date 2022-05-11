import React, { Fragment, useState } from "react";
import Ad_Box from "../Ad_Box/Ad_Box";
import "./ReadMore.scss";

const ReadMore = ({ children }) => {
  const text = children.text;
  console.log(text);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span className="read-or-hide">
        {isReadMore ? (
          <Fragment>
            <Ad_Box />
            <button className="btnb" onClick={toggleReadMore}>
              read more
            </button>
          </Fragment>
        ) : (
          <button className="btnb" onClick={toggleReadMore}>
            show less
          </button>
        )}
      </span>
    </p>
  );
};

const Content = text => {
  return (
    <div className="containe">
      <ReadMore>{text}</ReadMore>
    </div>
  );
};

export default Content;
