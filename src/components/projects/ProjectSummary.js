import React from 'react';
import moment from 'moment';//To format dates in human readable form

const ProjectSummary = ({project}) => {
    const {
           title, 
           authorFirstName, 
           authorLastName,
           createdAt,
        } = project;

    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {title}
                </span>
                <p>Posted by {authorFirstName} {authorLastName}</p>
                <p className="grey-text">
                    {moment(createdAt.toDate()).calendar()}
                </p>
            </div>
        </div>
    );
};

export default ProjectSummary;