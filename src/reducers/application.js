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
        case 'ADD_APPLICATION_USER_DOCUMENT':
            return {
                ...state,
                userDocuments: state.userDocuments.concat(action.userDocument),
            };
        case 'REMOVE_APPLICATION_USER_DOCUMENT':
            return {
                ...state,
                userDocuments: state.userDocuments
                    .filter((userDocument) => userDocument.id != action.userDocumentId)
            }
        case 'CLEAR_APPLICATION_USER_DOCUMENTS':
            return {
                ...state,
                userDocuments: action.userDocuments,
            };
        case 'SUBMIT_APPLICATION':
        case 'CLEAR_APPLICATION':
            return { user: {}, userDocuments: [] }
        default:
            return state;
    }
};

export default applicationReducer;

