const option = [
  {
    name: "Bubble",
    particles: {
      number: {
        value: 6,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#1b1e34",
      },
      shape: {
        type: "polygon",
        options: {
          polygon: {
            sides: 6,
          },
        },
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.5,
        },
      },
      size: {
        value: {
          min: 100,
          max: 160,
        },
      },
      links: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 8,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: false,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          duration: 2,
          size: 40,
          opacity: 0.8,
          color: "#ff0000",
          mix: true,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    background: {
      color: "#efefef",
    },
  },
  {
    name: "Absorbers",
    particles: {
      number: {
        value: 300,
      },
      collisions: {
        enable: true,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "top",
        straight: true,
        warp: true,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 10,
        },
      },
    },
    absorbers: {
      draggable: true,
      size: {
        value: {
          min: 5,
          max: 10,
        },
        limit: 10,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    background: {
      color: "#000000",
    },
  },
  {
    name: "Among Us",
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      number: {
        value: 200,
      },
      color: {
        value: "#fff",
        animation: {
          enable: false,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 3,
      },
      move: {
        angle: {
          value: 10,
          offset: 0,
        },
        enable: true,
        speed: 5,
        direction: "right",
      },
      zIndex: {
        value: 5,
        opacityRate: 0.5,
      },
    },
    background: {
      color: "#000000",
    },
    emitters: {
      position: {
        y: 55,
        x: -5,
      },
      rate: {
        delay: 7,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        shape: {
          type: "images",
          options: {
            images: {
              src: "https://particles.js.org/images/cyan_amongus.png",
              width: 500,
              height: 634,
            },
          },
        },
        size: {
          value: 40,
        },
        move: {
          speed: 10,
          outModes: {
            default: "none",
            right: "destroy",
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
  },
  {
    name: "Background Mask",
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: {
          min: 1,
          max: 30,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        bubble: {
          distance: 400,
          size: 100,
          duration: 2,
          opacity: 1,
        },
        push: {
          quantity: 4,
        },
      },
    },
    backgroundMask: {
      enable: true,
      cover: {
        value: {
          r: 255,
          g: 255,
          b: 255,
        },
      },
    },
    background: {
      color: "#ffffff",
      image: "url('https://particles.js.org/images/background3.jpg')",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  },
  {
    name: "Basic",
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: "#000000",
    },
  },
  {
    name: "Big Particles",
    particles: {
      number: {
        value: 30,
      },
      color: {
        value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.4,
          max: 0.8,
        },
      },
      size: {
        value: {
          min: 300,
          max: 400,
        },
        animation: {
          enable: true,
          speed: 100,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 10,
        direction: "top",
      },
    },
    background: {
      color: "#ffffff",
    },
  },
  {
    name: "Black Hole",
    particles: {
      number: {
        value: 1000,
        density: {
          enable: true,
        },
      },
      color: {
        value: ["#ffffff", "#77ccff", "#ff3333", "#ffff33"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: {
          min: 1,
          max: 10,
        },
      },
      links: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        warp: true,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
      },
    },
    absorbers: {
      orbits: true,
      destroy: false,
      size: {
        value: 5,
        limit: 50,
        density: 1500,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    background: {
      color: "#000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  },
  {
    name: "Fireworks",
    fullScreen: {
      enable: true,
    },
    background: {
      color: "#000",
    },
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        delay: 0.15,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        y: 100,
        x: 50,
      },
    },
    particles: {
      number: {
        value: 0,
      },
      destroy: {
        bounds: {
          top: 30,
        },
        mode: "split",
        split: {
          count: 1,
          factor: {
            value: 0.333333,
          },
          rate: {
            value: 100,
          },
          particles: {
            stroke: {
              width: 0,
            },
            color: {
              value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
            },
            number: {
              value: 0,
            },
            collisions: {
              enable: false,
            },
            destroy: {
              bounds: {
                top: 0,
              },
            },
            opacity: {
              value: {
                min: 0.1,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 0.7,
                sync: false,
                startValue: "max",
                destroy: "min",
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 2,
              animation: {
                enable: false,
              },
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 2,
                },
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: 9.81,
                inverse: false,
              },
              decay: 0.1,
              speed: {
                min: 10,
                max: 25,
              },
              direction: "outside",
              outModes: "destroy",
            },
          },
        },
      },
      life: {
        count: 1,
      },
      shape: {
        type: "line",
      },
      size: {
        value: {
          min: 0.1,
          max: 50,
        },
        animation: {
          enable: true,
          sync: true,
          speed: 90,
          startValue: "max",
          destroy: "min",
        },
      },
      stroke: {
        color: {
          value: "#ffffff",
        },
        width: 1,
      },
      rotate: {
        path: true,
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100,
        },
        speed: {
          min: 10,
          max: 20,
        },
        outModes: {
          default: "destroy",
          top: "none",
        },
        trail: {
          fill: { color: "#000" },
          enable: true,
          length: 10,
        },
      },
    },
    sounds: {
      enable: true,
      events: [
        {
          event: "particleRemoved",
          filter: "explodeSoundCheck",
          audio: [
            "https://particles.js.org/audio/explosion0.mp3",
            "https://particles.js.org/audio/explosion1.mp3",
            "https://particles.js.org/audio/explosion2.mp3",
          ],
        },
      ],
      volume: 50,
    },
  },
  {
    name: "Forward",
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      rotate: {
        path: true,
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      stroke: {
        width: 0,
        color: "#000000",
      },
      shape: {
        type: "image",
        options: {
          image: {
            src: "https://particles.js.org/images/arrow.png",
            width: 512,
            height: 512,
            replaceColor: true,
          },
        },
      },
      opacity: {
        value: 1,
      },
      size: {
        value: {
          min: 1,
          max: 32,
        },
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    background: {
      color: "#ffffff",
    },
  },
  {
    name: "Gifs",
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        enable: true,
        speed: { min: 1, max: 6 },
      },
      number: {
        value: 20,
        max: 30,
      },
      opacity: {
        value: 1,
      },
      rotate: {
        path: true,
      },
      shape: {
        options: {
          image: {
            gif: true,
            height: 200,
            src: "https://particles.js.org/images/mario.gif",
            width: 200,
          },
        },
        type: "image",
      },
      size: {
        value: {
          min: 32,
          max: 64,
        },
      },
    },
  },
];

export default option;
