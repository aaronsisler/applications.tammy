const userDocumentsReducerDefaultState = [];

const userDocumentsReducer = (state = userDocumentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_USER_DOCUMENTS':
            return action.documents;
        case 'ADD_USER_DOCUMENT':
            return [...state, action.document];
        default:
            return state;
    }
};

export default userDocumentsReducer;

