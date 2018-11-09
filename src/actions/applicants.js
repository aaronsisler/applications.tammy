import database from 'Firebase/firebase';
import { setApplicants } from 'Actions/helpers/applicants';

export const startSetApplicants = () => (dispatch, getState) => {
    const { positionId } = getState().workflow.position;

    return database.ref(`applications/${positionId}`).once('value').then((snapshot) => {
        const applicants = [];
        snapshot.forEach((childSnapshot) => {
            const applicant = childSnapshot.val();
            const applicantNotes = applicant.applicantNotes
                ? [...Object.values(applicant.applicantNotes)]
                : [];
            applicants.push({
                applicantId: childSnapshot.key,
                positionId,
                ...childSnapshot.val(),
                applicantNotes,
            });
        });

        return dispatch(setApplicants(applicants));
    });
}
