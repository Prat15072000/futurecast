import React from "react";
import "./Blog-Card-Section.styles.scss";
import data from "../../data/blog.data";
import { Link } from "react-router-dom";

const Blog_Card_Section = () => {
  const arr = [];
  while (arr.length < 3) {
    var candidateInt = Math.floor(Math.random() * 6);
    console.log(candidateInt);
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  let blog1 = data.items[arr[0]];
  let blog2 = data.items[arr[1]];
  let blog3 = data.items[arr[2]];
  return (
    <div className="Blog_card_sec">
      <main className="page-content">
        <Link to={"/Blog/" + blog1.id}>
          <div
            className="card"
            style={{ backgroundImage: `url(${blog1.imageUrl})` }}
          >
            <div className="content">
              <h2 className="title">{blog1.title}</h2>
            </div>
          </div>
        </Link>
        <Link to={"/Blog/" + blog2.id}>
          <div
            className="card"
            style={{ backgroundImage: `url(${blog2.imageUrl})` }}
          >
            <div className="content">
              <h2 className="title">{blog2.title}</h2>
            </div>
          </div>
        </Link>
        <Link to={"/Blog/" + blog3.id}>
          <div
            className="card"
            style={{ backgroundImage: `url(${blog3.imageUrl})` }}
          >
            <div className="content">
              <h2 className="title">{blog3.title}</h2>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Blog_Card_Section;
