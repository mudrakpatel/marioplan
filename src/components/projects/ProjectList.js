import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    projects = projects !== null ? (
        projects.map(project => {
            return (
                <ProjectSummary key={project.id} project={project}/>
            );
        })
    ) : (
        null
    );

    return(
        <div className="project-list section">
            {projects}
        </div>
    );
};

export default ProjectList;