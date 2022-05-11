import React, { Fragment } from "react";
import mic from "../../assets/blog.webp";
import Jumbotron from "../../components/jumbotron/jumbotron";
import { Helmet } from "react-helmet";
import data from "../../data/blog.data";

import BlogCard from "../../components/Blog-Card/blog-card";
import BlueSection from "../../components/BlueBgSection/BlueSection";
import "./blogs.scss";

const blog = props => {
  return (
    <div className="blog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="head_overlay">
        <h3>Blogs</h3>
      </div>
      <Jumbotron img_center={mic} />
      <h3 className="head_blog">Boundless knowledge for the ages.</h3>
      <p className="para_blog">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo
      </p>
      {data.items.map(data => (
        <Fragment>
          <BlogCard data={data} />
          <BlueSection />
        </Fragment>
      ))}
    </div>
  );
};

export default blog;
