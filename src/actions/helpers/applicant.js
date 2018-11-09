export const addApplicantNote = (applicantNote) => ({
    type: 'ADD_APPLICANT_NOTE',
    applicantNote,
});

export const clearApplicant = () => ({
    type: 'CLEAR_APPLICANT',
});

export const setApplicant = (applicant) => ({
    type: 'SET_APPLICANT',
    applicant,
});

export const setApplicantStatus = (applicantStatus) => ({
    type: 'SET_APPLICANT_STATUS',
    applicantStatus,
});
