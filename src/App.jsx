import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
import "./styles/styles.css";
import React from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import GetStarted from "./components/GetStarted";

export default function App() {
  return (
    <div>
      <Particle />
      <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Welcome />
        <br />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}
