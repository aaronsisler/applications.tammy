const applicationReducerDefaultState = {
    userDocuments: [],
    user: {},
};

const applicationReducer = (state = applicationReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_APPLICATION_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'CLEAR_APPLICATION_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_APPLICATION_USER_DOCUMENTS':
            return {
                ...state,
                userDocuments: action.userDocuments,
            };

        case 'CLEAR_APPLICATION_USER_DOCUMENTS':
            return {
                ...state,
                userDocuments: action.userDocuments,
            };
        case 'SUBMIT_APPLICATION':
            return { user: {}, userDocuments: [] }
        default:
            return state;
    }
};

export default applicationReducer;

