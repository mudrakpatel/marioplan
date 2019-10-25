const initialState = {
    authError: null,
};

const authReducer = (state = initialState, action) => {
    //return state;
    switch(action.type){
        case 'LOGIN_ERROR':
            return{
                ...state,
                authError: action.error,
            };
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError: null,
            };
        case 'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup success');
            return {
                ...state,
                authError: null,
            };
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.error,
            };
        default:
            return state;
    }
};

export default authReducer;