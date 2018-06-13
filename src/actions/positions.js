import database from '../firebase/firebase';

export const setPositions = (positions) => ({
    type: 'SET_POSITIONS',
    positions
});

export const startSetPositions = () => (dispatch) =>
    database.ref(`positions`).once('value').then((snapshot) => {
        const positions = [];
        snapshot.forEach((childSnapshot) => {
            positions.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        dispatch(setPositions(positions));
    });
