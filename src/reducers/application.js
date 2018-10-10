const applicationReducerDefaultState = {
    userDocuments: [],
    user: {},
};

const applicationReducer = (state = applicationReducerDefaultState, action) => {
    switch (action.type) {
        case 'CLEAR_APPLICATION':
            return { user: {}, userDocuments: [] }
        case 'SET_APPLICATION_USER':
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default applicationReducer;

