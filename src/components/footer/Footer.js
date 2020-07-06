import React from "react";
import "./Footer.css";
// import { Fade } from "react-reveal";
import { Navbar } from 'react-bootstrap';
/* eslint-disable jsx-a11y/accessible-emoji */


export default function Footer() {
  return (
    <div className="footer-div">
      <Navbar className="navbar-light bg-light" sticky="bottom">
        <p className="footer-text">Contact <a href={`mailto:${'sharathg@sas.upenn.edu'}`}>Sharath Chandra Guntuku</a></p>
      </Navbar>
    </div>
  );
}
