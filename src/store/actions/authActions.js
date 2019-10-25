export const signIn = (credentials) => {
    const {email, password} = credentials;
    return(dispatch, getState, {getFirebase}) => {
        //Initialize firebase instance
        const firebase = getFirebase();
        //Sign in the user
        firebase
        .auth()
        .signInWithEmailAndPassword(
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

export const signUp = (newUser) => {
    const {email, password} = newUser;
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        //Initialize firestore database instance
        const firestore = getFirestore();
        //Create a new user in firebase
        firebase
        .auth()
        .createUserWithEmailAndPassword(
            email,
            password,
        ).then((response) => {
            return firestore
                   .collection('users')
                   .doc(response.user.uid)
                   .set({
                       firstName: newUser.firstName,
                       lastName: newUser.lastName,
                       initials: `${newUser.firstName[0] + newUser.lastName[0]}`.toUpperCase(),
                   });
        }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS',
            });
        }).catch((error) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                error: error,
            });
        });
    };
};