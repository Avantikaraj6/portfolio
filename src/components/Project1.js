import React from "react";
import { Container } from "react-bootstrap";
import project1 from "../images/hotstar.png";
import amazon from "../images/amazon.png";
import calculator from "../images/calculator.png";
import porfolio from "../images/portfolio.png";
const Project1 = () => {
  return (
    <div>
      <div className="projects-1 ">
        <div className="p-title text-white text-center">
          <h1>PROJECTS</h1>
          <h5>Some of my most recent works</h5>
        </div>
      </div>
      <div className=" ">
        <h1 className="text-center">PROJECTS</h1>
        <Container className="mb-3 mt-3">
          <h3 className="text-center">Disney Hotstar Clone</h3>
          <h6 className="mt-5">
            Github URL{" "}
            <a href="https://github.com/Avantikaraj6/Moviemania">
              https://github.com/Avantikaraj6/Moviemania
            </a>
            </h6>
          <h6>URL:<a href="https://adorable-cuchufli-a0ce3b.netlify.app/">https://adorable-cuchufli-a0ce3b.netlify.app/</a></h6>
          <img src={project1} className="w-100 img-fluid" />
          
         
          {/* <p className="mt-5">
            This is a Disney+ clone built using React JS and Firebase. It allows
            users to browse and stream Disney content, with features such as
            authentication.{" "}
          </p>
          <p>
            In this project i have used the following technologies:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React JS</li>
              <li>Firebase</li>
            </ul>{" "}
            I have created this Hotstar website clone by using media queries
            which makes the project responsive. -React - which helped us to
            build frontend such as designing and structure of website. -Hover
            Effects - styling all the buttons, images etc.
          </p>
          <p>
            CONCLUSION: It is my first project where i have to clone a website
            using react.
          </p> */}
        </Container>
        <div className="line"></div>
        <Container className="mb-3 mt-3">
          <h3 className="text-center">Amazon Clone</h3>

          <h6>
            URL{" "}
            <a href="https://stirring-trifle-916f3b.netlify.app/">
              https://stirring-trifle-916f3b.netlify.app/
            </a>
          </h6>
          <h6 >
            Github URL{" "}
            <a href="hhttps://github.com/Avantikaraj6/amazon-clone1.github.io">
            https://github.com/Avantikaraj6/amazon-clone1.github.io
            </a>
          </h6>
          <img src={amazon} className="w-100 img-fluid" />
        </Container>
        <Container className="mb-3 mt-3">
          <h2 className="text-center">Portfolio</h2>
          <img src={porfolio} className="w-100 img-fluid" />
        </Container>
        <Container className="mb-3 mt-3">
          <h2 className="text-center">JavaScript Projects</h2>

          <h3 className="text-center">Calculator</h3>
          <img src={calculator} className="w-100 img-fluid" />
        </Container>
      </div>
    </div>
  );
};

export default Project1;
