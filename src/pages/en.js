import React from 'react';
import {Link} from 'gatsby';


import Layout from '../components/Layout';

const Error404Page = () => (
  <Layout lang="en" title="Home">
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major text-center">
          <h2>
            English version coming soon
            <br />
          </h2>
          <Link href="/">Click to go to the French version.</Link>
        </header>
      </section>
    </div>
  </Layout>
);

export default Error404Page;
