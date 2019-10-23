//import {firestore} from '../../config/fbConfig';

export const createProject = (project) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore,
    }) => {
        //Make asynchronous call to database
        const firestore = getFirestore(); //This line might throw an error
        //Access projects collection from firestore database
        //and add a new project to projects collection
        //in firestore database
        firestore.collection('projects')
                 .add({
                     ...project,
                     authorFirstName: 'Peter',
                     authorLastName: 'Parker',
                     authorId: 12345,
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