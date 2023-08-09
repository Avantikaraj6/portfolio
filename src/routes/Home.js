import React from 'react'
import Top from '../components/Top';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "./Skills";
import Abou1 from '../components/Abou1';
import Project from '../components/pr';
import Contact1 from '../components/Contact1';
const Home = () => {
  return (
    <div className="project-col">
      <Top />
       <Header />
       <Abou1 />
       <Skills />
       <Project />
       <Contact1 />
       <Footer />
    </div>
  )
}

export default Home
