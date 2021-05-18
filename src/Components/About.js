import React from "react";
import { NavLink } from "react-router-dom";

import aboutimage from "../images/social-432496.svg";
const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="mt-3">
                    <h1>About Us</h1>
                    <p>
                      We are giving a best resources to our user, So that he can
                      learn easily. This website give the information about
                      learning platform and youtube videos, article, notes for
                      Computer programming, Website design and Software company
                      prepration.
                    </p>
                    <NavLink to="/services" className="btn-get-started">
                      Services
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img
                    src={aboutimage}
                    className="img-fluid animated imageHome"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
