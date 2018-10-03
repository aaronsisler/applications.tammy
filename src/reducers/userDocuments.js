const userDocumentsReducerDefaultState = [];

const userDocumentsReducer = (state = userDocumentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_USER_DOCUMENTS':
            return action.userDocuments;
        case 'ADD_USER_DOCUMENT':
            return [...state, action.userDocument];
        default:
            return state;
    }
};

export default userDocumentsReducer;
