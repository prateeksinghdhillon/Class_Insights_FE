import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";
import featureBox from "../../../assets/features-box.svg";

export default function Home() {
  return (
    <>
      <Header />
      {/* Home------------------------------------------------------------------------------ */}
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
        {/* features--------------------------------------------------------------------------------------- */}
        <div className="features">
          <div className="features-heading">
            <span className="overline">features</span>
            <h2 className="heading">Elevate Your Educational Experience</h2>
            <span className="underline">
              Discover the powerful features of our comprehensive School ERP
              system
            </span>
          </div>

          <div className="features-tiles">
            <div className="tile">
              <div className="tile-image">
                <img className="image" src={featureBox} alt="" srcset="" />
              </div>
              <div className="tile-container">
                <h3 className="tile-head">Real-time Attendance Tracking</h3>
                <span className="tile-Des">
                  Track student attendance in real-time
                </span>
              </div>
            </div>
            <div className="tile">
              <div className="tile-image">
                <img className="image" src={featureBox} alt="" srcset="" />
              </div>
              <div className="tile-container">
                <h3 className="tile-head">Grades Management</h3>
                <span className="tile-Des">
                  Efficiently manage and record student grades
                </span>
              </div>
            </div>
            <div className="tile">
              <div className="tile-image">
                <img className="image" src={featureBox} alt="" srcset="" />
              </div>
              <div className="tile-container">
                <h3 className="tile-head">Transparency and Collaboration</h3>
                <span className="tile-Des">
                  Foster transparency and collaboration among educators,
                  administrators, and parents
                </span>
              </div>
            </div>
            <div className="tile">
              <div className="tile-image">
                <img className="image" src={featureBox} alt="" srcset="" />
              </div>
              <div className="tile-container">
                <h3 className="tile-head">Empowerment for Student Success</h3>
                <span className="tile-Des">
                  Empower educators, administrators, and parents for student
                  success
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* pricing------------------------------------------------------------------------------------------------- */}
        <div className="pricing-container">
          <div className="pricing-head">
            <span className="overline">PRICING</span>
            <h2 className="heading">Choose the Right Plan for You</h2>
            <span className="underline">
              Elevate your educational experience with our comprehensive School
              ERP system. Select the plan that suits your needs and start
              gaining real-time insights today.
            </span>
          </div>
          <div className="plan-container">
            <div className="plan">
              <div className="plan-head">
                <span className="tier">free</span>
                <span className="tier-des">
                  A comprehensive plan for basic needs
                </span>
              </div>
              <div className="plan-price">
                <span className="price-sign">₹</span>
                <span className="price">0</span>
                <span className="period">/month</span>
              </div>
              <div className="plan-des">
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Real-time attendance tracking</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Basic grade management</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">
                    Limited access for educators, administrators, and parents
                  </span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Email support</span>
                </div>
              </div>
              <button className="continue-butn">Continue with Free</button>
            </div>
            <div className="plan">
              <div className="plan-head">
                <span className="tier">basic</span>
                <span className="tier-des">
                  An upgraded plan with additional features
                </span>
              </div>
              <div className="plan-price">
                <span className="price-sign">₹</span>
                <span className="price">200</span>
                <span className="period">/month</span>
              </div>
              <div className="plan-des">
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Real-time attendance tracking</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Advanced grade management</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">
                    Full access for educators, administrators, and parents
                  </span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Email and phone support</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Access to Analytics</span>
                </div>
              </div>
              <button className="choose-butn">Try the Basic plan</button>
            </div>
            <div className="plan">
              <div className="plan-head">
                <span className="tier">pro</span>
                <span className="tier-des">
                  The ultimate plan for enhanced functionality
                </span>
              </div>
              <div className="plan-price">
                <span className="price-sign">₹</span>
                <span className="price">500</span>
                <span className="period">/month</span>
              </div>
              <div className="plan-des">
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Real-time attendance tracking</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Advanced grade management</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">
                    Full access for educators, administrators, and parents
                  </span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">
                    Email, phone, and live chat support
                  </span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Access to Analytics</span>
                </div>
                <div className="des">
                  <span className="tick">✔</span>
                  <span className="text">Access to Automation services</span>
                </div>
              </div>
              <button className="choose-butn">Try the PRO plan</button>
            </div>
          </div>
        </div>
        {/* banner----------------------------------------------------------------------------------------------------- */}
        <div className="banner">
          <h1 className="banner-head">
            Gain real-time insights into attendance, grades, and more
          </h1>
          <div className="banner-des">
            With ClassInsights, you can easily track attendance, monitor grades,
            and access comprehensive student data in real-time. Our School ERP
            system provides educators, administrators, and parents with the
            tools they need to foster transparency and collaboration for student
            success.
          </div>
          <button className="banner-butn">Discover Features</button>
        </div>
        {/* FAQ----------------------------------------------------------------------------------------------------------------- */}
        <div className="faq-container">
          <div className="faq-head">
            <span className="overline">faq</span>
            <h2 className="heading">Common questions</h2>
            <span className="underline">
              Here are some of the most common questions that we get.
            </span>
          </div>
          <div className="faq-questions">
            <div className="question">
              <span className="question-text">What is ClassInsights?</span>
              <span className="answer">
                ClassInsights is a comprehensive School ERP system that provides
                real-time insights into attendance, grades, and more.
              </span>
            </div>

            <div className="question">
              <span className="question-text">
                Who can benefit from ClassInsights?
              </span>
              <span className="answer">
                ClassInsights is designed to empower educators, administrators,
                and parents for student success.
              </span>
            </div>
            <div className="question">
              <span className="question-text">
                How does ClassInsights foster transparency and collaboration?
              </span>
              <span className="answer">
                ClassInsights fosters transparency and collaboration by
                providing real-time access to attendance and grades, allowing
                educators, administrators, and parents to work together for the
                benefit of the students.
              </span>
            </div>
            <div className="question">
              <span className="question-text">
                What features does ClassInsights offer?
              </span>
              <span className="answer">
                ClassInsights offers features such as real-time attendance
                tracking, grade management, communication tools, and more.
              </span>
            </div>
            <div className="question">
              <span className="question-text">
                Is ClassInsights easy to use?
              </span>
              <span className="answer">
                Yes, ClassInsights is designed with user-friendly interfaces to
                ensure ease of use for educators, administrators, and parents.
              </span>
            </div>
          </div>
        </div>
        {/* footer------------------------------------------------------------------- */}
        <Footer />
      </div>

    </>
  );
}
