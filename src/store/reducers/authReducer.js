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
            console.log('Signout success');
            return state;
        default:
            return state;
    }
};

export default authReducer;