const documentsReducerDefaultState = [];

const documentsReducer = (state = documentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_DOCUMENTS':
            return action.documents;
        case 'ADD_DOCUMENT':
            return [...state, action.document];
        // case 'REMOVE_DOCUMENT':
            // return state.filter((document) => document.id != action.id);
        default:
            return state;
    }
};

export default documentsReducer;

