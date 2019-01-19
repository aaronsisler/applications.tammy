import database from 'Firebase/firebase';
import {
    addApplicantNote,
    clearApplicant,
    setApplicant,
    setApplicantStatus,
    setApplicantNotes,
} from 'Actions/helpers/applicant';

export const startAddApplicantNote = (statusNote) => (dispatch, getState) => {
    const { applicantId, positionId } = getState().applicant;
    const date = new Date();
    const priority = -(date.getTime());

    return database.ref(`applicants/${positionId}/${applicantId}/applicantNotes`)
        .push().setWithPriority({ statusNote, priority }, priority)
        .then(() => {
            dispatch(addApplicantNote({ statusNote }));
        });
}

export const startClearApplicant = () => (dispatch) => dispatch(clearApplicant());

export const startSetApplicant = (applicantId) => (dispatch, getState) => {
    const { applicants } = getState();
    const applicantMatch = applicants.find((applicant) => applicant.applicantId == applicantId);

    return dispatch(setApplicant(applicantMatch));
}

export const startSetApplicantStatus = (applicantStatus) => (dispatch, getState) => {
    const { applicantId, positionId } = getState().applicant;

    return database.ref(`applicants/${positionId}/${applicantId}`).update({ applicantStatus })
        .then(() => dispatch(setApplicantStatus(applicantStatus)));
}

export const startSetApplicantNotes = () => (dispatch, getState) => {
    const { applicantId, positionId } = getState().applicant;
    return database.ref(`applicants/${positionId}/${applicantId}/applicantNotes`, {
        query: {
            orderByPriority: true,
        }
    }).then((snapshot) => {
        const applicantNotes = [];
        snapshot.forEach((childSnapshot) => applicantNotes.push(childSnapshot.statusNote));
        return dispatch(setApplicantNotes(applicantNotes))
    });
}
