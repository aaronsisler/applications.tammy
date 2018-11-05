const applicantReducerDefaultState = null;

const applicantReducer = (state = applicantReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_APPLICANT':
            return action.applicant;
        case 'CLEAR_APPLICANT':
            return null;
        default:
            return state;
    }
};

export default applicantReducer;

