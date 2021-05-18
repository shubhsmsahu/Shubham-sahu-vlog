import React from "react";
import { NavLink } from "react-router-dom";
import homeImage from "../images/homeimge.svg";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto content-div">
              <div className="row">
                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Increase your programming skills with{" "}
                    <strong className="brand-name">Shubham Sahu Vlog</strong>
                  </h1>
                  <h2 className="my-3">We are the team of Developers</h2>
                  <div className="mt-3 mb-5">
                    <NavLink to="/services" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={homeImage}
                    className="img-fluid animated imageHome"
                    alt="home img"
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

export default Home;
