import React from "react";
import portfolioImage from "../images/for-portfolio-pic.jpg"; // Adjust the path as needed

export default function Welcome() {
  const scrollToGetStarted = () => {
    const getStartedSection = document.getElementById("get-started");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-2">
      <div className="container welcome-border my-5">
        <div className="row p-5 my-5">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex text-white justify-content-center align-items-center">
              <p className="fs-1 orbitron text-center">
                Hey! nice to meet you.
                <br />
                I am Gian, an aspiring
                <br />
                Software Engineer.
              </p>
            </div>
            <div className="text-center mt-4">
              <button
                className="btn btn-secondary px-4 px-2 text-sm"
                onClick={scrollToGetStarted}
              >
                Know more about me!
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-5">
            <img
              src={portfolioImage}
              alt="Portfolio"
              className="rounded-img img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
