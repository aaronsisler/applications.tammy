const applicationReducerDefaultState = {
    userDocuments: [],
    user: {},
};

const applicationReducer = (state = applicationReducerDefaultState, action) => {
    switch (action.type) {
        case 'CLEAR_APPLICATION':
            return { user: {}, userDocuments: [] }
        default:
            return state;
    }
};

export default applicationReducer;

