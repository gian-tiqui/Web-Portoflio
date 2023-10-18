import React from "react";
import portfolioImage from "../images/for-portfolio-pic.jpg"; // Adjust the path as needed

export default function Welcome() {
  return (
    <div className="container welcome-border my-5">
      <div className="row p-5 my-5">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex text-white justify-content-center align-items-center">
            <p className="fs-1 orbitron">
              Hello! nice to meet you
              <br />
              I am Gian, an aspiring
              <br />
              Software Engineer.
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src={portfolioImage}
            alt="Portfolio"
            width="400"
            height="400"
            className="rounded-img"
          />
        </div>
      </div>
    </div>
  );
}
