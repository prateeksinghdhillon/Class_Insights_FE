import React, { useState } from "react";
import "./Header.scss";
import menu from "../../../assets/menu.png";
import close from "../../../assets/close.png";

export default function Header() {
  const [menuBtn, setMenuBtn] = useState(false);
  return (
    <>
      <header className="home-header">
        <div className="heading">classinsights</div>
        <div className="home-desktop-menu">
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="login-butn">
          <button className="login butn">login</button>
          <button className="register butn">register</button>
        </div>
        <div onClick={() => setMenuBtn(!menuBtn)} className="menu-icon">
          <img src={menu} alt="" />
        </div>
      </header>
      {menuBtn && (
        <div className="menu">
          <div onClick={() => setMenuBtn(!menuBtn)} className="close-icon">
            <img src={close} alt="" />
          </div>
          <div className="menu-desktop-menu">
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Team</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="menu-login-butn">
            <button className="login butn">login</button>
            <button className="register butn">register</button>
          </div>
        </div>
      )}
    </>
  );
}
