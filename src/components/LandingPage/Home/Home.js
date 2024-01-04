import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="quote">
          <h1 className="quote-heading">Elevate your educational experience</h1>
          <span className="description">
            ClassInsights: Comprehensive School ERP system
          </span>
          <div className="quote-butn-group">
            <button className="register butn">Learn More</button>
            <button className="login butn">login →</button>
          </div>
        </div>
        <div>home</div> <div>home</div> <div>home</div> <div>home</div>{" "}
        <div>home</div> <div>home</div> <div>home</div>
      </div>
      <Footer />
    </>
  );
}
