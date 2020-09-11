import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import Particles from 'react-particles-js';


import avatar from '../assets/images/CV_white.png';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: config.menu,
      open: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(e) {
    e.preventDefault();

    this.setState({
      open: !this.state.open
    })


  }


  render() {
    const { tabs } = this.state;

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

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <Particles
          params={particleParams}
          className="particles-wrapper"
          reRender={this.state.open}
        />


        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>


          <span className="d-none d-lg-block">
            <img
              className="img-fluid mx-auto mb-2 p-4"
              src={avatar}
              alt=""
            />

          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={this.toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ` + (!this.state.open ? "collapse" : "")} id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map((tab) => tab.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, key) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={key}  onClick={this.toggleNav}>
                  <Scroll type="id" element={href} >
                    <a className="nav-link" href={`#${href}`} >
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>

      </nav>
    );
  }
}

export default Sidebar;
