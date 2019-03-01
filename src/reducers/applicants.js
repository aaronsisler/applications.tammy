const applicantsReducerDefaultState = [];

const applicantsReducer = (state = applicantsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_APPLICANTS':
            return action.applicants || applicantsReducerDefaultState;
        case 'SET_APPLICANT_STATUS':
            return state.map((applicant) =>
                applicant.applicantId === action.applicantId ?
                    {
                        ...applicant,
                        applicantStatus: action.applicantStatus
                    } :
                    applicant);
        case 'ADD_APPLICANT_NOTE':
            return state.map((applicant) =>
                applicant.applicantId === action.applicantId ?
                    {
                        ...applicant,
                        applicantNotes: [action.noteMessage, ...applicant.applicantNotes]
                    } :
                    applicant);
        default:
            return state;
    }
};

export default applicantsReducer;

