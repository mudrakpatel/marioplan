export const signIn = (credentials) => {
    const {email, password} = credentials;
    return(dispatch, getState, {getFirebase}) => {
        //Initialize firebase instance
        const firebase = getFirebase();
        //Sign in the user
        firebase.auth().signInWithEmailAndPassword(
            email,
            password,
        ).then(() => {
            //Dispatch 'LOGIN_SUCCESS' action type
            dispatch({
                type: 'LOGIN_SUCCESS',
                //No additional data required
                //to pass in the action object
            });
        }).catch((error) => {
            //Dispatch 'LOGIN_ERROR' action type
            dispatch({
                type: 'LOGIN_ERROR',
                error: error,
            });
        });
    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        //Sign out user
        firebase.auth().signOut().then(() => {
            //Dispatch 'SIGNOUT_SUCCESS' action type
            dispatch({
                type: 'SIGNOUT_SUCCESS',
            });
        });
    };
};