import React from "react"
import web from "../src/images/img2.svg";
import Commom from './Commom';

const About = () => {
    return(
        <>
        <Commom name="Welcome to About page " imgsrc={web} 
        visit="/contact"
        btname="Contact Now"/>
        </>
    );
};
export default About;