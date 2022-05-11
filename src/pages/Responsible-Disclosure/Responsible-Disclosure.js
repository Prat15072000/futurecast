import React from "react";
import { Helmet } from "react-helmet";

import mic from "../../assets/rd.webp";
import Jumbotron from "../../components/jumbotron/jumbotron";
import More_Like from "../../components/More_like_this/More_Like";

import "./Responsible-Disclosure.scss";

const BugBounty = props => {
  return (
    <div className="BugBounty">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Responsible Disclosure </title>
        <meta
        name="Description"
        content="Future Cast is committed to maintaining the security of our products, services, and systems with the Responsible Vulnerability Disclosure Program"
      />
      <meta
        name="keywords"
        content="bug bounty, rvdp, responsible disclosure, security, bug, vulnerabilities, attacks, bounty, vulnerability, website, swag, reward, hall of fame"
      />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="head_overlay">
        <h3>Responsible Disclosure</h3>
      </div>
      <Jumbotron img_center={mic} />
      <p className="BugBountyRead">
       We care deeply about keeping our data safe and secure. Your input and feedback on our security is always appreciated.
      </p>
      <h4 className="BugBountyHead">Responsible Vulnerability Disclosure Program</h4>
      <h4 className="BugBountyHead_2">Reporting An Issue</h4>
      <p className={`blue BugBountyRead`}>
      Have you discovered a security related issue?
      Please send a report to <a href="mailTo:security@futurecast.com">security@futurecast.com</a> with details like:
        <ul><li>A summary of the problem</li></ul>
        <ul><li>A PoC or breakdown of how to replicate the issue </li></ul>
        <ul><li> The operating system name and version as well as the web browsers 
        name and version that you used to replicate the issue</li></ul>
        <ul><li>How to resolve the the stated security vulnerability</li></ul>
        <ul><li>Note: If you are attaching any video based PoC then make sure you share your Google Drive link</li></ul>

      </p>
      <h5 className="BugBountyHead_2">Things We’re Interested In</h5>
      <p className="BugBountyRead">
        We are interested in any vulnerabilities related to the <a href="https://google.com">futurecast.com</a> website such as:
        <ul><li>Sever Security Misconfigurations</li></ul>
        <ul><li>Sensitive Information Leakage</li></ul> 
        <ul><li>and any other security issues that might effect</li></ul>
        <ul><li>Do not DDoS or otherwise disrupt, interrupt, or degrade our services</li></ul>
        <ul><li>Do not conduct spam or phishing attacks</li></ul>
        <ul><li>Please keep the vulnerabilities secret until you’ve notified us, and we’ve had adequate time to 
        resolve the issue</li></ul>
      </p>
      <h5 className="BugBountyHead_2">What should you expet from us</h5>
      <p className={`blue BugBountyRead`}>
        <ul><li>We will give you an answer within two weeks.</li></ul>
        <ul><li>We will contact you again if we need any additional information.</li></ul>
        <ul><li>We make every effort to solve the issue quickly and efficiently.</li></ul>
        <ul><li>If your actions meet the above criteria, we will not bring any legal proceedings against you.</li></ul>
        <ul><li>Once the issue is resolved, we will post an update along with our
         thanks and acknowledgement of your contribution</li></ul>
         <h5>*Note: We however don't offer bounties but will be very glad to offer you a certificate or send our exclusive merchandise if your
         report turn very beneficial to our company.</h5>
      </p>
      <div className="acknowledgement">
        <h3>Acknowledgements</h3>
        <p>
          We are grateful to the following people for having reported valid security bugs 
          and for helping us make Future Cast safer.
          <ol>
            
            {/* <li>Names Here for Hall of Fame</li> */}
          </ol>
        </p>
      </div>
      <More_Like />
    </div>
  );
};

export default BugBounty;
