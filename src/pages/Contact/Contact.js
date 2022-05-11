import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import touch from "../../assets/gettouchimg.png";
import mic from "../../assets/contact.webp";
import Jumbotron from "../../components/jumbotron/jumbotron";
import More_Like from "../../components/More_like_this/More_Like";
import { Helmet } from "react-helmet";

import "./Contact.scss";
import { useParams } from "react-router";
import { Fragment } from "react";
import Popup from "../../components/popup/popup";

const Contact = (props) => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="Contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="head_overlay">
        <h3>Contact Us!</h3>
      </div>
      <Jumbotron img_center={mic} />
      <div className="Contact_section"> 
        <Container className="main_contact">
          <Row>
            <Col
              xs={{ order: "last" }}
              lg={{ span: "5", order: "first" }}
              className="desc"
            >
              <h2>Get in touch</h2>

              <h4>Mailto:</h4>

              <p>solutionhubkol17@gmail.com</p>

              <h4>Just do a Whatsapp on</h4>

              <p>+91 8697096672</p>

              <h4>Swag Related Query</h4>

              <p>solutionhubkol17@gmail.com</p>

              {/* <img className="images" src={touch} /> */}
            </Col>
            <Col lg={7}>
              <form
                className="form-detail"
                action="https://formsapi.jabwn.com/key/rPT1IlI7FYiJq1SlpZiP"
                method="post"
                id="myform"
              >
                <input
                  type="hidden"
                  name="_after"
                  value="http://localhost:3000/Contact"
                />

                <h2>Got some query?</h2>
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
                  <input type="submit" value="Send" className="button3" />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
