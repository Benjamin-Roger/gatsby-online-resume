import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StaticQuery, graphql } from 'gatsby';

import SEO from "./SEO";

import '../assets/sass/resume.scss';

const Layout = ({ children, title, lang }) => {

  return (
    <>
      <SEO title={title} lang={lang} />
      <div className={'main-body'}>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
