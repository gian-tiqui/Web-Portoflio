import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import option from "../particles/Particle.js";

export default function Particle() {
  const [randomNum, setRandomNum] = useState(1);

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  useEffect(() => {
    const newRandomNum = Math.random();
    setRandomNum(newRandomNum < 0.5 ? 1 : 2);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={option[randomNum]}
      className="particles-container"
    />
  );
}
