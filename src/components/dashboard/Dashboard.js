import React, {Component} from 'react';
import {connect} from 'react-redux';
//Connect this component to the firestoreReducer and firestore database
import {firestoreConnect} from 'react-redux-firebase';
//To use two Higher-Order-Components (HOCs) 
//together for a single React Component
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component{
    render(){
        /** 
         * STEP 2 to accessing Redux store data
         * within a component.
         * YOU DID IT! :)
         * **/
        const {projects, auth, notifications} = this.props;

        if(!auth.uid){
            return(
                <Redirect to='/signin'/>
            );
        } else {
            return(
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList projects={projects}/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications notifications={notifications}/>
                        </div>
                    </div>
                </div>
            );
        }
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
        //Firestore provides raw data
        //as well as ordered data to
        //to work with, we will use ordered
        //data in Dashboard component here
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        //Specify to which firestore database
        //collection this component connects.
        {
            collection: 'projects',
        },
        {
            //Connect to notifications
            //collection from firestore
            //database and limit the
            //data to 3 items
            collection: 'notifications',
            limit: 3,
        },
    ]),
)(Dashboard);