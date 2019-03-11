import database from 'Firebase/firebase';
import { getPriority } from 'Tools/datetime';
import {
    addApplicantNote,
    setApplicantStatus,
} from 'Actions/helpers/applicant';

export const startAddApplicantNote = ({ applicantId, noteMessage, positionId }) => (dispatch) => {
    const priority = getPriority();
    return database.ref(`applicants/${positionId}/${applicantId}/applicantNotes`)
        .push().setWithPriority({ noteMessage }, priority)
        .then(() => dispatch(addApplicantNote({ applicantId, noteMessage })));
}

export const startSetApplicantStatus = ({ applicantId, applicantStatus, positionId }) => (dispatch) =>
    database.ref(`applicants/${positionId}/${applicantId}`).update({ applicantStatus })
        .then(() => dispatch(setApplicantStatus({ applicantId, applicantStatus })));
