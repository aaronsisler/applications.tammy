import database from 'Firebase/firebase';
import {
    addApplicantNote,
    clearApplicant,
    setApplicant,
    setApplicantStatus
} from 'Actions/helpers/applicant';

export const startClearApplicant = () => (dispatch) => dispatch(clearApplicant());

export const startSetApplicant = (applicantId) => (dispatch, getState) => {
    const { applicants } = getState();
    const applicantMatch = applicants.find((applicant) => applicant.applicantId == applicantId);

    return dispatch(setApplicant(applicantMatch));
}

export const startSetApplicantStatus = (applicantStatus) => (dispatch, getState) => {
    const { applicantId, positionId } = getState().applicant;

    return database.ref(`applications/${positionId}/${applicantId}`).update({ applicantStatus })
        .then(() => dispatch(setApplicantStatus(applicantStatus)));
}

export const startAddApplicantNote = (statusNote) => (dispatch, getState) => {
    const { applicantId, positionId } = getState().applicant;

    return database.ref(`applications/${positionId}/${applicantId}/applicantNotes`)
        .push({ statusNote })
        .then(() => {
            dispatch(addApplicantNote({ statusNote }));
        });
}
