import React from "react";
import "./Footer.css";
import { Navbar } from 'react-bootstrap';
/* eslint-disable jsx-a11y/accessible-emoji */
import { socialMediaLinks } from "../../portfolio";


export default function Footer() {
  return (
    <div className="footer-div">
      <Navbar className="navbar-light bg-light" sticky="bottom">
        <p className="footer-text">Contact <a href={`mailto:${'sharathg@sas.upenn.edu'}`}>Sharath Chandra Guntuku</a></p>
        <div >
          <div className="social-media-div social-media">
            <a
              href={socialMediaLinks.linkedin}
              className="icon-button linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <span></span>
            </a>
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              className="icon-button google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-fw fa-envelope"></i>
              <span></span>
            </a>
            <a
              href={socialMediaLinks.twitter}
              className="icon-button twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
              <span></span>
            </a>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
