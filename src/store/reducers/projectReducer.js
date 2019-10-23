const initialState = {
    projects: [
        {id: 1, title: "Help me find peach!", content: "Here goes resources and plans to find Peach and save her...",},
        {id: 2, title: "Happiness course project.", content: "Educate people the importance of doing an Art Of Living Happiness course and teach them Sudarshan Kriya.",},
        {id: 3, title: "Meditation project", content: "Gather as many people as you can and conduct a public meditation session.",},
    ],
};

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Created project: ', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('ERROR: Project not created! ', action.error);
            return state;
        default:
            return state;
    }
}

export default projectReducer;