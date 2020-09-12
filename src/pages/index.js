import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ResumeItem from '../components/ResumeItem';
import PortfolioItem from '../components/PortfolioItem';
import Sidebar from '../components/Sidebar';
import LineChart from '../components/LineChart';

import config from '../../config';

const AboutSection = () => (
  <>
    {/* About */}

    < section className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {config.firstName}
          <span className="text-primary"> {config.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          <a href={`mailto:${config.email}`}>{config.email} · </a>
          <span className="d-block d-md-inline">{config.address} ·</span> <span className="d-block d-md-inline">{config.phone}</span>
        </div>
        <div className="lead" dangerouslySetInnerHTML={{ __html: config.bio }} />
        <a className="mt-2 mb-5 btn btn-teal border-0 p-3 pl-4" href={config.freelanceSite.url} title={config.freelanceSite.title}>{config.freelanceSite.title}</a>
        <div className="social-icons">
          {config.socialLinks.map((social, key) => {
            const { icon, url } = social;
            return (
              <a key={key} href={url}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section >
  </>

)

const ExperienceSection = ({ experiences }) => (
  < section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Expériences</h2>

      <div className="pl-3 pl-lg-5 resume-item-wrapper timeline">

        <div className="align-fix"></div>
        {experiences.map((experience, key) => (
          <>
            <ResumeItem
              key={key}
              {...experience.node.frontmatter}>
              <div dangerouslySetInnerHTML={{ __html: experience.node.html }} />
            </ResumeItem>
          </>))
        }
      </div>
    </div>
  </section >

)

const EducationSection = ({ education }) => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>
      <div className="pl-3 pl-lg-5 resume-item-wrapper timeline">

        <div className="align-fix"></div>
        {education.map((item, key) => (
          <>
            <ResumeItem
              key={key}
              {...item.node.frontmatter}>
              <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
            </ResumeItem>
          </>))
        }
      </div>
    </div>
  </section>
)

const SkillSection = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">Compétences</h2>

      <h3 className="subheading mb-3">
        Compétences métier
</h3>

      {config.businessSkills.map((skill, key) => <LineChart key={key} title={skill.name} percentage={skill.percentage} className="business-skills" />)}

      <h3 className="subheading mt-4 mb-3">
        Compétences sectorielles
</h3>

      {config.sectorSkills.map((skill, key) => <LineChart key={key} title={skill.name} percentage={skill.percentage} className="sector-skills" />)}

      <h3 className="subheading mt-4 mb-3">
        Compétences techniques
</h3>

      <div className="dev-icons" >
        {config.technicalSkills.map((skill, key) => (
          <LineChart
            key={key}
            title={<><i className={`fab ${skill.iconClass}`}></i> {skill.name}</>}
            percentage={skill.percentage}
            className="technical-skills"
          />))}
      </div>

      <p className="mt-4">Je travaille principalement avec les technologies suivantes :</p>
      <ul>

        {
          Object.keys(config.toolsFrameworks).map((category, key) => (
            <li key={key}>{category} : {config.toolsFrameworks[category].join(", ")}</li>
          )
          )
        }
      </ul>

    </div>
  </section>

)

const CertificationSection = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="certifications"
    style={{ minHeight: "50vh" }}
  >
    <div className="w-100">
      <h2 className="mb-5">Certifications</h2>
      <ul className="fa-ul mb-0">
        {config.certifications.map((certification, key) => {
          return (
            <li key={key} className="w-50 p-2 pr-4 d-inline-block">
              <a href={certification.url} rel="nofollow" title={certification.name}>
                <i className="fa-li fa fa-award text-warning"></i>
                {certification.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
)

class PortfolioSection extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      portfolioCategory: "All"
    };

    // this.handleCategoryFilter = this.handleCategoryFilter.bind(this);

  }

  handleCategoryFilter(e) {
    e.preventDefault();

    
  }

  render() {

    const portfolio = this.props.portfolio;

    const visible_portfolio = (this.state.portfolioCategory === "All") ? portfolio : portfolio.filter(project => project.node.frontmatter.categories.includes(this.state.portfolioCategory));


    return (

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Missions et projets</h2>


          {config.portfolio.introParagraphs.map((paragraph, key) => {
            return <p key={key}>{paragraph}</p>;
          })}

          <div className="mb-5"></div>

          <div className="pl-lg-3 resume-item-wrapper">

            {
              portfolio.filter(project => project.node.frontmatter.categories.includes("Consulting")).map((project, key) => (
                <>
                  <PortfolioItem
                    key={key}
                    {...project.node.frontmatter}>
                    <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
                  </PortfolioItem>
                  <hr />
                </>))
            }

            {/* {portfolio.map((project, key) => (
                <>
                  <PortfolioItem
                    key={key}
                    {...project.node.frontmatter}>
                    <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
                  </PortfolioItem>
                  <hr />
                </>))
              } */}
          </div>
        </div>
      </section>

    )

  }
}

const IndexPage = ({ data }) => (

  <Layout title="Accueil">
    <Sidebar />
    <div className="container-fluid p-0">

      <AboutSection />

      <hr className="m-0" />

      {/* Experiences */}

      <ExperienceSection experiences={data.experiences.edges} />

      <hr className="m-0" />

      {/* Education */}

      <EducationSection education={data.education.edges} />

      <hr className="m-0" />

      {/* Skills */}

      <SkillSection />

      <hr className="m-0" />

      {/* Certifications */}

      <CertificationSection />

      <hr className="m-0" />

      <PortfolioSection portfolio={data.portfolio.edges} />


    </div>
  </Layout >
);

export default IndexPage;



export const query = graphql`

  fragment MarkdownContent on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          name
          title
          company
          url
          url_project
          position
          start_date
          end_date
          location
          flag_id
          lang
          categories
        }
        html
      }
    }
  }


	query HomepageQuery {
		experiences: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___end_date}, filter: {fileAbsolutePath: {regex: "/experiences/"}}) {
      ...MarkdownContent
    }
    
    education:allMarkdownRemark(sort: { order: DESC, fields: frontmatter___end_date }, filter: {fileAbsolutePath: {regex: "/education/"}}) {
			...MarkdownContent
    }
    
    portfolio:allMarkdownRemark(sort: { order: DESC, fields: frontmatter___end_date }, filter: {fileAbsolutePath: {regex: "/projects/"}}) {
			...MarkdownContent
		}
	}
`;

