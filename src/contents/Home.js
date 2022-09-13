import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import picture from '../assets/collage.jpg'
import { Link } from "react-scroll";

function Home(){
   return(
   <div id="home" style={{backgroundImage: `linear-gradient(rgba(20,20,20, .8), rgba(20,20,20, .8)), url(${picture})`, textAlign:'center'}}>
        <div id="text">
            <h1 style={{margin: 0, padding: 0}}>Komal Essarani</h1>
            <h2 style={{margin: 0, padding: 0}}>loves exploring, eating good food, and development :)</h2>  <br/> 
            <div className="links">
                <ul>
                    <li><a href="https://github.com/komalessarani" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon id="icon" icon={faGithub} size="2x" color="white"/></a></li>
                    <li><a href="https://www.facebook.com/komal.essarani" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon id="icon" icon={faFacebook} size="2x" color="white"/></a></li>
                    <li><a href="https://www.linkedin.com/in/komalessarani/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon id="icon" icon={faLinkedin} size="2x" color="white"/></a></li>
                </ul>
            </div>             
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70}duration={500}>
            <FontAwesomeIcon icon={faChevronDown} size="3x" className = "arrow bounce" color ="white" 
            style={{position:'absolute', bottom:50, cursor:'pointer'}}/>
            </Link>
        </div> 
    </div>
    );
}



export default Home;