import React from 'react';

const ProjectDetails = (props) => {
    //Get the id parameter from the route
    const id = props.match.params.id;

    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Project details go in here...</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {}</div>
                    <div>20th October, 12 am</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;