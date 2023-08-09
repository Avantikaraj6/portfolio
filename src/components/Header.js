import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import introimg from "../images/Group 4.png";
import hgdg from "../images/HTML.jpeg";
import { Container , Row} from 'react-bootstrap';
const Header = () => {
  return (<>
<div className="footer text-center">
        <Container>
            <Row>
            <section className="about" id="about">
        <div className="max-width">
          <h2 className="title1">HI, I am Avantika and I am a</h2>
          
            
             
             <h1 className="typed mb-5">FRONTEND DEVELOPER</h1>
            <div>
                <Link to="/project" className='btn-col'>
                   Projects
                </Link>
                <Link to="/contact" className='btn-col btn-light'>
                   Contact Me
                </Link>
             </div>
          
        </div>
      </section>
            </Row>
        </Container>
        </div>
       
        </>
    
  )
}

export default Header
