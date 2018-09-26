import database from '../firebase/firebase';
import { setPositions } from 'Actions/helpers/positions';

export const startSetPositions = () => (dispatch) =>
    database.ref(`positions`).once('value').then((snapshot) => {
        const positions = [];
        snapshot.forEach((childSnapshot) => {
            positions.push({
                positionId: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        dispatch(setPositions(positions));
    });
