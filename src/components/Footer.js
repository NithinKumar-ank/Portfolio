import "./FooterStyles.css";

import React from "react";

import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />

            <div>
              <p>Madhapur, Hyderabad</p>
              <p>Telangana</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9154213852
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              nithinthecoder@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          {/* <p>I am a react developer attempting to merge more skills through implementation.</p> */}
          <p>
            I am a passionate React developer with a love for creating
            interactive and user-friendly web applications.
          </p>
          <div className="social">

          <a href="https://www.linkedin.com/in/nithinkumar-ank">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            
            <a href="https://github.com/NithinKumar-ank?tab=repositories">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>

            <a href=" https://twitter.com/NithinKumar_ank">
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
