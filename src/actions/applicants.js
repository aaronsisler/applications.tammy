import database from 'Firebase/firebase';
import { setApplicants } from 'Actions/helpers/applicants';

export const startSetApplicants = () => (dispatch, getState) => {
    const { positionId } = getState().position;

    database.ref(`applicants/${positionId}`).once('value').then((snapshot) => {
        const applicants = [];
        snapshot.forEach((childSnapshot) => {
            applicants.push({
                applicantId: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        return dispatch(setApplicants(applicants));
    });
}
