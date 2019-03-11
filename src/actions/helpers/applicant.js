export const addApplicantNote = ({ applicantId, noteMessage }) => ({
    type: 'ADD_APPLICANT_NOTE',
    applicantId,
    noteMessage,
});

export const setApplicantStatus = ({ applicantId, applicantStatus }) => ({
    type: 'SET_APPLICANT_STATUS',
    applicantId,
    applicantStatus,
});
