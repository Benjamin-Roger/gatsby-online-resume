import React from 'react';


import countriesName from '../utils/countriesName';


const PortfolioItem = ({ name, company, url, url_project, categories, start_date, end_date, flag_id, children }) => (
    <div className={"resume-item portfolio-item mt-5 p-3 shadow-sm rounded " + (categories.includes("Consulting") ? "consulting" : "")}>
        <div className="resume-date text-right float-right">
            <p className="text-primary">{(start_date !== end_date) ? (start_date + ' - ' + end_date) : start_date}</p>
            {
                flag_id ? flag_id.map((flag, key) => <img className="flag-icons ml-2 mb-2 shadow-sm rounded-circle" key={`flag_${key}`} src={`/images/${flag}.svg`} title={countriesName[flag]} alt={countriesName[flag]} />) : ''
            }

        </div>

        <div className="resume-content pb-5 position-relative">
            <h4 className="mb-0">{name}</h4>
            <div className="mb-3 mt-1 d-flex flex-column">
                <h5 className="mr-2">
                    {
                        url ? (<a className="portfolio-link hover-link" href={url} title={company} alt={company} rel="nofollow">{company}</a>) : <span className="portfolio-link text-color-primary hover-link">{company}</span>
                    }
                </h5>
                <span> {categories ? (categories.map(category => (
                    <span
                        key={`${category}`}
                        className={"small rounded text-white p-1 mt-1 mb-1 ml-0 mr-2 pr-3 pl-3 d-inline-block " + (category === "Consulting" ? "bg-primary" : "bg-green")}
                    >
                        {category}
                    </span>))) : ''}
                </span>
            </div>

            {children}


            <br />

            {url_project ? (
                <p className="text-right position-absolute" style={{ bottom: 0, right: 0 }}>
                    <a
                        className="site-link btn btn-primary border-0"
                        href={url_project}
                        title={name} alt={name}
                        rel="nofollow">
                        {(url_project.match(`github.com`) ? `Voir le projet sur Github` : `Voir le site`)}
                        <i className={`ml-2 ` + (url_project.match(`github.com`) ? `fab fa-github` : `fa fa-globe`)} ></i>
                    </a>
                </p>
            ) : ''}



        </div>



    </div>
)


export default PortfolioItem;
