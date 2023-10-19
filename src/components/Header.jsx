import React from "react";

export default function Header() {
  return (
    <header className="transparent-background fixed-top">
      <div className="d-flex justify-content-between p-3 px-auto container">
        <p className="orbitron text-white fs-1 mt-3 text-center text-md-start">
          Gian
        </p>
        <div className="d-none d-md-block header-buttons-border">
          <button className="btn text-secondary fs-4">About</button>
          <button className="btn text-secondary fs-4">Contact</button>
          <button className="btn text-secondary fs-4">About Me</button>
        </div>
        <div className="d-md-none dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-black"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul
            className="dropdown-menu bg-black"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <button className="dropdown-item text-white">About</button>
            </li>
            <li>
              <button className="dropdown-item text-white">Contact</button>
            </li>
            <li>
              <button className="dropdown-item text-white">About Me</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
