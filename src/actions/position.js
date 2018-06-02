import database from '../firebase/firebase';

export const setPositions = (positions) => ({
    type: 'SET_POSITIONS',
    positions
});

export const startSetPositions = () => (dispatch) =>
    database.ref(`positions`)
        .once('value')
        .then((snapshot) => {
            dispatch(
                setPositions(
                    {
                        id: snapshot.key,
                        ...snapshot.val()
                    }));
        });
