import React from "react";
import "./Footer.scss";
import twitter from "../../../assets/twitter-icon.svg";
import facebook from "../../../assets/facebook-icon.svg";
import instagram from "../../../assets/insta-icon.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <div className="heading">classinsights</div>
        <div className="home-desktop-menu">
            <span className="nav-butn">About</span>
            <span className="nav-butn">Features</span>
            <span className="nav-butn">Pricing</span>
            <span className="nav-butn">Team</span>
            <span className="nav-butn">Blog</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="copyright">
        <span className="copyright-text">
          © 2023 myCompany, All Rights Reserved.
        </span>
        <div className="social-media">
          <img className="media-img" src={twitter} alt="" />
          <img className="media-img" src={instagram} alt="" />
          <img className="media-img" src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
}
