const userDocumentsReducerDefaultState = [];

const userDocumentsReducer = (state = userDocumentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_USER_DOCUMENTS':
            return action.userDocuments;
        default:
            return state;
    }
};

export default userDocumentsReducer;
