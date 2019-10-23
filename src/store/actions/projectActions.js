export const createProject = (project) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore,
    }) => {
        //Make asynchronous call to database
        dispatch({
            type: 'CREATE_PROJECT',
            project: project,
        });
    }
};