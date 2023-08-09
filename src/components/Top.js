import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarBrand } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Top = () => {
    const [navbar, setNavbar] = useState(false);
    const changebackground= () =>{
        if(window.scrollY >= 100){
        setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
  window.addEventListener('scroll',changebackground);

    const[click, setClick] = useState(false);

    const handleClick=() => setClick(!click);

  return (
    <>
    <div >
         <Navbar
         collapseOnSelect
         expand="lg"
         fixed="top"
         bg="dark"
         variant="dark"
         className={navbar ? 'navbar active' : 'navbar' } 
         id="navbar">
         
         <Link to="/">
             <h1>Portfolio</h1>
         </Link>
         <div className="nav-items">
         <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/skill">Skills</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            
         </ul>
         <div className="hamburger" onClick={handleClick}>
            {click ? 
            <FaTimes size={20} style={{color:"#fff"}} /> :
             <FaBars size={20} style={{color:"#fff"}} />
            }
            
         </div>
         </div>
         </Navbar>
         
    </div>
    
    </>
  )
}

export default Top;
