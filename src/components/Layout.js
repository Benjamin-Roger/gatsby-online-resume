import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StaticQuery, graphql } from 'gatsby';

import SEO from "./SEO";

import '../assets/sass/resume.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                defaultLanguage
              }
            }
          }
        `}
        render={(data) => (
          <>
            <SEO title={this.props.title} />
            <div className={'main-body'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
