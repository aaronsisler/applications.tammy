const applicationReducerDefaultState = {
    userDocuments: [],
    user: {},
};

const applicationReducer = (state = applicationReducerDefaultState, action) => {
    switch (action.type) {
        case 'CLEAR_APPLICATION':
        case 'SUBMIT_APPLICATION':
            return { user: {}, userDocuments: [] }
        case 'SET_APPLICATION_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_APPLICATION_USER_DOCUMENT':
            return {
                ...state,
                userDocuments: state.userDocuments.concat(action.userDocument),
            };
        case 'REMOVE_APPLICATION_USER_DOCUMENT':
            return {
                ...state,
                userDocuments: state.userDocuments
                    .filter((userDocument) => userDocument.userDocumentId != action.userDocumentId)
            }
        default:
            return state;
    }
};

export default applicationReducer;

