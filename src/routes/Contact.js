import React from "react";
import Footer from "../components/Footer";
import Top from "../components/Top";
import Contact1 from "../components/Contact1";
const Contact = () => {
  const hello = () => {
    (console.log("hello"))
  }
  return (
    <>
<Top />
   <Contact1 />
   
    <Footer />
    </>
  );
};

export default Contact;
