import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import Slide from '@material-ui/core/Slide';

import ParticlesBackground from './ParticlesBackground'

import avatar from '../assets/images/cv_white.png';
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


    return (
      <Slide direction="right" timeout={700} in={true}>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <ParticlesBackground
            reRender={this.state.open}
          />


          <a className="navbar-brand" href="#page-top">
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
          <div className={`mb-2 navbar-collapse  ` + (!this.state.open ? "collapse" : "")} id="navbarSupportedContent">
            <Scrollspy
              items={tabs.map((tab) => tab.href)}
              currentClassName="active"
              offset={-300}
              className="navbar-nav"
            >
              {tabs.map((tab, key) => {
                const { href, content } = tab;
                return (
                  <li className="nav-item" key={key} onClick={this.toggleNav}>
                    <Scroll type="id" element={href} >
                      <a className="nav-link" href={`#${href}`} >
                        {content}
                      </a>
                    </Scroll>
                  </li>
                );
              })}

              <li className="social-icons mt-4">
                {config.socialLinks.map((social, key) => (
                  <a key={key} href={social.url}>
                    <i className={`fab ${social.icon}`}></i>
                  </a>
                )
                )}
              </li>
            </Scrollspy>


          </div>



        </nav>
      </Slide>
    );
  }
}

export default Sidebar;
