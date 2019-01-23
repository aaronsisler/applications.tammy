const applicantsReducerDefaultState = [];

const applicantsReducer = (state = applicantsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_APPLICANTS':
            return action.applicants || applicantsReducerDefaultState;
        default:
            return state;
    }
};

export default applicantsReducer;

