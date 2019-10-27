import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

import {deleteProject} from '../../store/actions/projectActions';

const ProjectDetails = (props) => {
    const {project, auth, projectId, projectError,} = props;

    const handleDeleteButtonOnClick = (projectId) => {
        //console.log('Deleting project: ', projectId);
        props.deleteProject(projectId);
        //Redirect user to the Homepage
        props.history.push('/');
    };

    if(!auth.uid){
        return(
            <Redirect to='/signin'/>
        );
    } else {
        if(project) {
            return(
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {
                                `${project.authorFirstName} ${project.authorLastName}`
                                }
                            </div>
                            <div>
                                {moment(project.createdAt.toDate()).calendar()}
                            </div>
                        </div>
                    </div>
                    < div className="red lighten-4 red-text center">
                                {
                                    projectError ?
                                    (
                                        <h5 style={{
                                                padding: '6px',
                                                border: '1px solid red',
                                                borderRadius: '5px',
                                            }}>
                                            {projectError.message}
                                        </h5>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                    <button
                        onClick={() => handleDeleteButtonOnClick(projectId)}
                        className="btn-floating btn-large red waves-effect">
                        &#10006;
                    </button>
                </div>
            );
        } else{
            return (
                <div className="container center">
                    <p>Loading project...</p>
                </div>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects? projects[id] : null;
    return{
        auth: state.firebase.auth,
        project: project,
        projectId: id,
        projectError: state.project.projectError,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        deleteProject: (projectId) => {
            dispatch(deleteProject(projectId));
            //console.log('Deleting project: ', projectId);
        },
    };
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    firestoreConnect([
        {collection: 'projects'},
    ]),
)(ProjectDetails);