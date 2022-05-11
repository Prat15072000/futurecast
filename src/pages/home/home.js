import React from "react";

import mic from "../../assets/mic.webp";
import Jumbotron from "../../components/jumbotron/jumbotron";
import BW_Head from "../../components/BW_Heading/BW_Head";
import Podcast from "../../components/Podcast/Podcast";
import BlogCard from "../../components/Blog-Card/blog-card";
import SwagSection from "../../components/swag-block/swag";
import BlueSection from "../../components/BlueBgSection/BlueSection";
import { Helmet } from "react-helmet";
import data from "../../data/blog.data";

import "./home.scss";
import { Link } from "react-router-dom";

const home = (props) => {
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Future Cast Presents!</title>
        <meta
          name="description"
          content="Future Cast is focusing on building a community where people can actually distinguish between what is feasible and then can form decisive opinions"
        />
        <meta
          name="keywords"
          content="podcast, content, articles, video, sound, psychology,timeline, form, creator, future, artificial, synthetic, "
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="head_overlay">Your Future starts here</h1>
      <Jumbotron img_center={mic} check />
      <div className="signup_para">
        <h3 className="signup_para_h3">You can write for us</h3>
        <p className="signup_para_p">
          If you are good at a particular genre, would appreciate if you could
          write for us.
        </p>
        <Link to="/Creator-form">
          <p className="signup_para_button">Sign Up</p>
        </Link>
      </div>

      <BW_Head t1="SPOT" t2="LIGHT" k={1} />
      <Podcast />
      <BlueSection />
      <BW_Head t1="FC Blog .." t2="from the" k={0} />
      <BlogCard data={data.items[1]}/>
      <BlueSection />
      <SwagSection />
    </div>
  );
};

export default home;
