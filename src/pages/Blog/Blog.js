import React from "react";

import mic from "../../assets/BlogPodcast.png";
import Ad_Box from "../../components/Ad_Box/Ad_Box";
import Jumbotron from "../../components/jumbotron/jumbotron";
import Blog_Card_Section from "../../components/Blog-Card-Section/Blog-Card-Section.js";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import data from "../../data/blog.data";

import "./Blog.scss";

const Blog = (props) => {
  let { id } = useParams();
  const blog = data.items[id - 1];
  return (
    <div className="Blog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog.title}</title>
        <meta name="description" content={blog.intro} />
        <meta name="keywords" content={blog.keywords} />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="head_overlay">
        <h3>{blog.title}</h3>
        <a href="https://google.com">{blog.author}</a>
      </div>
      <Jumbotron img_center={mic} />
      <div className="genre">{blog.genre}</div>
      <p className="read_time">6 min read</p>
      <Ad_Box />
      <p className="BlogRead">{blog.para1}</p>
      <br/>
      <p className = "BlogRead">{blog.para2}</p>
      <br/>
      <p className = "BlogRead">{blog.para3}</p>
      <br/>
      <br/>
      <h7 className = "Credits">Credits: {blog.credits}</h7>
      <Blog_Card_Section />
    </div>
  );
};

export default Blog;
