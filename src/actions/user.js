import database from '../firebase/firebase';

export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const startSetUser = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`users/${userId}`).once('value').then((snapshot) => {
        dispatch(setUser(
            {
                userId: snapshot.key,
                ...snapshot.val()
            }));
    })
};

export const editUser = (userId, updates) => ({
    type: 'EDIT_USER',
    userId,
    updates
});

export const startEditUser = (updates) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`users/${userId}`).update(updates).then(() => {
        dispatch(editUser(userId, updates));
    });
};

export const clearUser = () => ({
    type: 'CLEAR_USER'
});

export const startClearUser = () => (dispatch) => dispatch(clearUser());
