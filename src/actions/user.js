import database from '../firebase/firebase';

export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const startSetUser = () => (dispatch, getState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}`).once('value').then((snapshot) => {
        dispatch(setUser(
            { uid: snapshot.key, ...snapshot.val() }));
    })
};

export const editUser = (uid, updates) => ({
    type: 'EDIT_USER',
    uid,
    updates
});

export const startEditUser = (updates) => (dispatch, getState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}`).update(updates).then(() => {
        dispatch(editUser(uid, updates));
    });
};
