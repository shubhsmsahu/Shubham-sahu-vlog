import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto my-3">
        <div className="card">
          <img
            src="https://source.unsplash.com/1920x1080/?computer,programming"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
