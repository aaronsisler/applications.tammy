const applicantReducerDefaultState = null;

const applicantReducer = (state = applicantReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_APPLICANT':
            return action.applicant;
        case 'CLEAR_APPLICANT':
            return null;
        case 'SET_APPLICANT_STATUS':
            return {
                ...state,
                applicantStatus: action.applicantStatus,
            }
        case 'ADD_APPLICANT_NOTE':
            return {
                ...state,
                applicantNotes: [action.applicantNote, ...state.applicantNotes],
            }
        default:
            return state;
    }
};

export default applicantReducer;

