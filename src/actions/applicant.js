import { clearApplicant, setApplicant } from 'Actions/helpers/applicant';

export const startClearApplicant = () => (dispatch) => dispatch(clearApplicant());

export const startSetApplicant = (applicantId) => (dispatch, getState) => {
    const { applicants } = getState();
    const applicantMatch = applicants.find((applicant) => applicant.applicantId == applicantId);

    return dispatch(setApplicant(applicantMatch));
}
