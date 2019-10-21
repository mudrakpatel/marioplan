import React, {Component} from 'react';
import {connect} from 'react-redux';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component{
    render(){
        /** 
         * STEP 2 to accessing Redux store data
         * within a component.
         * YOU DID IT! :)
         * **/
        const {projects} = this.props;

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    };
};

    /** 
     * STEP 1 to accessing Redux store data
     * in a component.
     * 
     * Get the projects array from the
     * Redux store state(accessible from 
     * the state variable in the function arguments).
     * Make the projects array accessible
     * within the props of this component
     * so the projects array can be used
     * inside this component.
     * **/
const mapStateToProps = (state) => {
    return{
        projects: state.project.projects,
    }
}

export default connect(
    mapStateToProps,
)(Dashboard);