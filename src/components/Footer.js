import React from "react";
import "./Footer.css";
import giticon from "../images/OIP (6).jpeg";
import fbicon from "../images/fb.png";
import instaicon from "../images/insta.png";
import linkedin from "../images/R (5).png";
import locicon from "../images/R (6).png";
import telicon from "../images/R (8).png";
import twittericon from "../images/OIP (7).jpeg";
import gmailicon from "../images/OIP (9).jpeg";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <h3 className="text-center text-white  mb-3 pt-3">Contact Me</h3>
        <Row className="text-center">
          <a href="https://github.com/Avantikaraj6" target="_blank">
            <img src={locicon} alt="github url" className="images1" />
            <span>Laxminagar, New Delhi, 110092</span>
          </a>
          <a href="https://github.com/Avantikaraj6" target="_blank">
            <img src={telicon} alt="github url" className="images1 mb-3" />
            <span>+91 7667618546</span>
          </a>
          <a href="https://mail.google.com/" target="_blank">
            <img src={gmailicon} alt="gmail url" className="images1 mb-3" />
            <span>avnigupta6404@gmail.com</span>
          </a>
          <a href="https://github.com/Avantikaraj6" target="_blank">
            <img src={giticon} alt="github url" className="images1 mb-3" />
            <span>https://github.com/Avantikaraj6</span>
          </a>
        </Row>
      </Container>
      <Container fluid className="line">
        <h3 className="text-center text-white mt-4">Connect With Me</h3>
        <Row className="text-center">
          <Col>
            <div className="">
              <a
                href="https://www.facebook.com/profile.php?id=100025231095042"
                target="_blank"
              >
                <img src={fbicon} alt="Fb url" className="images" />
              </a>
              <a
                href="https://www.instagram.com/avantikaraj101/"
                target="_blank"
              >
                <img src={instaicon} alt="Instagram url" className="images" />
              </a>
              <a
                href="https://www.linkedin.com/in/avantika-raj-157ba9233/"
                target="_blank"
              >
                <img src={linkedin} alt="Linkedin  url" className="images" />
              </a>
              <a
                href="https://www.linkedin.com/in/avantika-raj-157ba9233/"
                target="_blank"
              >
                <img src={twittericon} alt="Linkedin  url" className="images" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="line">
        <Row>
          <Col className="text-white">
            <span>
              <a href="#">&#169; Avantika Raj </a> |{" "}
              <span class="far fa-copyright"></span> 2022 All Rights Reserved.
              Privacy Policy
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
