import React from 'react';
import {Link} from 'gatsby';


import Layout from '../components/Layout';

const Error404Page = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major text-center">
          <h2>
            Erreur 404
            <br />
            Cette page n'existe pas.
          </h2>
          <Link href="/">Retourner à la page d'accueil.</Link>
        </header>
      </section>
    </div>
  </Layout>
);

export default Error404Page;
