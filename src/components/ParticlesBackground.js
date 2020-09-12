import Particles from 'react-particles-js';

import React from 'react';



var particleParams = {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1500
        }
      },
      "line_linked": {
        "enable": true,
        "opacity": 0.2
      },
      "move": {
        "direction": "right",
        "speed": 0.5
      },
      "size": {
        "value": 1
      },
      "opacity": {
        "anim": {
          "enable": true,
          "speed": .5,
          "opacity_min": 0.4
        }
      }
    },
    "interactivity": {
      "events": {
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "onhover": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "push": {
          "particles_nb": 2
        },
        "bubble": {
          "size": 3,
          "distance": 40
        }
      }
    },
    "retina_detect": true
  };

const ParticlesBackground = ({ reRender }) => (
    <Particles
        params={particleParams}
        className="particles-wrapper"
        reRender={reRender}
    />
)

export default ParticlesBackground;