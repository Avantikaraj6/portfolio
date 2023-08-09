import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import avni from "../images/avni.png";
const Abou1 = () => {
  return (
    <div className="footer">
        <Container>
            <Row>
            <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={avni} alt="Profile Image 626x626" />
            </div>
            <div className="column right">
              <div className="text">I'm Avantika and I'm a <span className="typing-2">Frontend Developer</span></div>
              <p>Seeking an opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
              <br/>
              <div className="text">Why Work With Me</div>
              <p>I'm a great communicator & love to invest the necessary time to understand the problem very well.</p>

              <a href="https://drive.google.com/file/d/10mpSWJL8Du5-t7zqwonxC-IVznkz6qmP/view?usp=sharing" target="blank">Download CV</a>
            </div>
          </div>
        </div>
      </section>
            </Row>
        </Container>
    </div>
  )
}

export default Abou1