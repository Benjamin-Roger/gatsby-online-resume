import React from 'react';


import countriesName from '../utils/countriesName';


const ResumeItem = ({ name, company, url, position, start_date, end_date, location, flag_id, children }) => (
    <div className="resume-item mb-5">
        <div className="resume-date float-right text-right">
            <p className="text-primary">{(start_date !== end_date) ? (start_date + ' - ' + end_date) : start_date}</p>
            {
                flag_id ? flag_id.map((flag, key) => <img className="flag-icons ml-2 mb-2 shadow-sm rounded-circle" key={key} src={`/images/${flag}.svg`} title={countriesName[flag]} alt={countriesName[flag]} />) : ''
            }
        </div>

        <div className="resume-content">
            <h3 className="mb-0">{position}</h3>
            <p className="subheading mb-3">
                <a className="subheading hover-link" rel="nofollow" href={url}>
                    {company}
                </a>
                {` - `}
                <span>
                    {location}
                </span>
            </p>
            {children}

        </div>

    </div>
)


export default ResumeItem;
