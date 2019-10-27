//import {firestore} from '../../config/fbConfig';

export const createProject = (project) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore,
    }) => {
        //Make asynchronous call to database
        const firestore = getFirestore(); //This line might throw an error
        //Access logged in users profile data
        //using getState method
        const profile = getState().firebase.profile;
        //Access author ID i.e. logged in user ID
        const authorId = getState().firebase.auth.uid;
        //Access projects collection from firestore database
        //and add a new project to projects collection
        //in firestore database
        firestore.collection('projects')
                 .add({
                     ...project,
                     authorFirstName: profile.firstName,
                     authorLastName: profile.lastName,
                     authorId: authorId,
                     createdAt: new Date(),
                 })
                 .then(() => {
                    dispatch({
                        type: 'CREATE_PROJECT',
                        project: project,
                    });
                 })
                 .catch((err) => {
                    dispatch({
                        type: 'CREATE_PROJECT_ERROR',
                        error: err,
                    });
                 });
    }
};

//Delete project
export const deleteProject = (projectId) => {
    return(dispatch, getState, {
        getFirebase,
        getFirestore,
    }) => {
        //Initialize firestore database instance
        const firestore = getFirestore();
        //Delete a project from firestore database
        firestore.collection('projects')
                 .doc(projectId)
                 .delete()
                 .then(() => {
                    dispatch({
                        type: 'DELETE_PROJECT_SUCCESS',
                    });
                 })
                 .catch((err) => {
                    dispatch({
                        type: 'DELETE_PROJECT_ERROR',
                        error: err,
                    });
                 });
    }
};