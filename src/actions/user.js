import database from 'Firebase/firebase';
import { setUser, editUser, clearUser } from './helpers/user';

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

export const startEditUser = (updates) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`users/${userId}`).update(updates).then(() => {
        dispatch(editUser(updates));
    });
};

export const startClearUser = () => (dispatch) => dispatch(clearUser());
