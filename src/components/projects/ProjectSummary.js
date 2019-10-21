import React from 'react';

const ProjectSummary = ({projectTitle, postedByUser, datePosted}) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {projectTitle}
                </span>
                <p>Posted by {postedByUser}</p>
                <p className="grey-text">{datePosted}</p>
            </div>
        </div>
    );
};

export default ProjectSummary;