import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import mic from "../../assets/form.webp";
import Jumbotron from "../../components/jumbotron/jumbotron";
import More_Like from "../../components/More_like_this/More_Like";

import "./Creator.scss";

const Creator = props => {
  return (
    <div className="Creator">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      
      <div className="head_overlay">
        <h3>Creator's Form</h3>
      </div>
      
      <Jumbotron img_center={mic} />
      <div className="bgk">
        <div className="Creator_form">
          <form
            className="form-detail"
            action="https://formsapi.jabwn.com/key/rPT1IlI7FYiJq1SlpZiP"
            method="post"
            id="myform"
          >
            <input
              type="hidden"
              name="_after"
              value="https://project-6a02b.web.app/creator-form/1"
            />
            <h2> Become a Creator</h2>
            <div className="form-row">
              <input
                type="text"
                name="name"
                id="your_email"
                className="input-text"
                placeholder="Name"
                required="required"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="company"
                className="input-text"
                placeholder="Name of your Company"
                required="required"
              />
            </div>
            <div className="form-group fg2">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="contact"
                  className="input-text"
                  placeholder="Contact No."
                  required="required"
                  pattern="[7-9]{1}[0-9]{9}"
                />
              </div>
              <div className="form-row form-row-1">
                <input
                  type="email"
                  name="Email"
                  className="input-text"
                  placeholder="Email address"
                  required="required"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-row form-row-1 ">
                <input
                  type="text"
                  name="city"
                  className="input-text"
                  placeholder="City"
                  required="required"
                />
              </div>
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="state"
                  className="input-text"
                  placeholder="State"
                  required="required"
                />
              </div>
            </div>
            <div className="form-row">
              <textarea
                placeholder="Message"
                name="Message"
                className="textarea"
                required="required"
              ></textarea>
            </div>

            <div>
              <input type="submit" value="Submit" className="button3" />
            </div>
          </form>
        </div>
      </div>
      <More_Like />
    </div>
  );
};

export default Creator;
