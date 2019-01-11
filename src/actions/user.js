import database from 'Firebase/firebase';
import { clearUser, editUser, setUser } from 'Actions/helpers/user';

export const startClearUser = () => (dispatch) => dispatch(clearUser());

export const startEditUser = (updates) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`users/${userId}`).update(updates).then(() => dispatch(editUser(updates)));
};

export const startSetUser = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`users/${userId}`).once('value').then((snapshot) => dispatch(setUser(
        {
            userId: snapshot.key,
            ...snapshot.val()
        })));
};
