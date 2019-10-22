export const createProject = (project) => {
    return (dispatch, getState) => {
        //Make asynchronous call to database
        dispatch({
            type: 'CREATE_PROJECT',
            project: project,
        });
    }
};