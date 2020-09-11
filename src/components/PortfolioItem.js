import React from 'react';


import countriesName from '../utils/countriesName';


const PortfolioItem = ({ name, company, url, url_project, categories, start_date, end_date, flag_id, children }) => (
    <div className={"resume-item portfolio-item d-flex flex-column flex-md-row justify-content-between mt-5 p-3 shadow-sm rounded " + (categories.includes("Consulting") ? "consulting" : "")}>
        <div className="resume-content">
            <h4 className="mb-0">{name}</h4>
            <div className="mb-3 mt-1 d-flex">
                <h5 className="mr-2">
                    {
                        url ? (<a className="portfolio-link hover-link" href={url} title={company} alt={company} rel="nofollow">{company}</a>) : <span className="portfolio-link text-color-primary hover-link">{company}</span>
                    }
                </h5>
                <span> {categories ? (categories.map(category => (
                    <span
                        key={category}
                        className={"small rounded text-white p-1 m-1 pr-3 pl-3 " + (category === "Consulting" ? "bg-primary" : "bg-green")}
                    >
                        {category}
                    </span>))) : ''}
                </span>
            </div>

            {children}



        </div>
        <div className="resume-date text-md-right position-relative">
            <p className="text-primary">{(start_date !== end_date) ? (start_date + ' - ' + end_date) : start_date}</p>
            {
                flag_id ? flag_id.map((flag, key) => <img className="flag-icons ml-2 mb-2 shadow-sm rounded-circle" key={key} src={`/images/${flag}.svg`} title={countriesName[flag]} alt={countriesName[flag]} />) : ''
            }

            <br />

            {url_project ? (
                <p className="text-right position-absolute" style={{ bottom: 0, right: 0 }}>
                    <a
                        className="site-link btn btn-primary border-0"
                        href={url_project}
                        title={name} alt={name}
                        rel="nofollow">
                        {(url_project.match(`github.com`) ? `Voir le projet sur Github` : `Voir le site`)}
                        <i className={`ml-2 ` + (url_project.match(`github.com`) ? `fab fa-git-alt` : `fa fa-globe`)} ></i>
                    </a>
                </p>
            ) : ''}
        </div>


    </div>
)


export default PortfolioItem;
