import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import { Card } from 'react-bootstrap';
import Records from "./data/data.json";
import {Col, Row, Button, Container} from "react-bootstrap";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };


  const images = [
    
];


const Skills = ({ deviceType }) => {

    
  return (
    <div className=" skills-txt">
        
        <h1 className="text-center mb-5 title">Skills</h1>
        <Container>
    <Carousel
      
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      swipeable={false}
  draggable={false}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ true }
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  // "dotListClass="custom-dot-list-style
    >
        {
            Records.map( product => {
            return(
                <Col xs={12} md={6} lg={4} key={product.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="text-black">
          {product.content}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
            )
        })}
    </Carousel>
    </Container>
    </div>
  )
}

export default Skills;


