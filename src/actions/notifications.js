import database from 'Firebase/firebase';
import { setNotifications } from 'Actions/helpers/notifications';

export const startAddNotification = () => (undefined, getState) => {
    const { uid: userId } = getState().auth;
    const notification = { hasBeenViewed: false, notificationMessage: 'I am a notification' };

    return database.ref(`notifications/${userId}`).push({ ...notification });
}

export const startStreamNotifications = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`notifications/${userId}`).on('value', (snapshot) => {
        const notifications = [];
        snapshot.forEach((childSnapshot) => {
            notifications.push({
                notificationId: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        return dispatch(setNotifications(notifications));
    });
}
