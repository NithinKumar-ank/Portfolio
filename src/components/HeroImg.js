import "./HeroImgStyles.css";

import {Link} from "react-router-dom";
import deve7 from "../assets/deve7.jpg";

import resume from "../Resume-Folder/Nithin_Kumar_React_resume.pdf" ;


import React from 'react';


const HeroImg = () => {
  return (
    
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={deve7} alt="IntroImg"></img>
           
           <div className="row">
            <div className="col sm">
         

            </div>
           </div>
            
         

            <div className="content">
                <p>Hi, I'M NITHIN KUMAR</p>
                <h1>React Developer</h1>
                
               
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    {/*<Link to="/Resume" download="Nithin Kumar React resume.pdf"><button>Download Resume</button></Link>
                     <Link to="/contact" className="btn btn-light">Contacts</Link> */}
                    {/* <Route path="/download" component={Download_Resume} /> */}
                    <a href={resume} download="Nithin Kumar Resume">
            <button className="btn">Resume</button>
          </a>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImg;
