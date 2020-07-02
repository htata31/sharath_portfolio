import React from "react";
import "./Footer.css";
// import { Fade } from "react-reveal";
import { Navbar } from 'react-bootstrap';
/* eslint-disable jsx-a11y/accessible-emoji */


export default function Footer() {
  return (
    <div className="footer-div">
      <Navbar  sticky="bottom">
        <p className="footer-text">Made with <span role="img">❤️</span> by Ashutosh Hathidara</p>
      </Navbar>
    </div>
  );
}
