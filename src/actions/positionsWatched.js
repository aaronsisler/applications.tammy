import database from 'Firebase/firebase';
import {
    addSubscription,
    removeSubscription,
    setPositionsWatched,
    setSubscriptionLevel
} from 'Actions/helpers/positionsWatched';

export const startAddSubscription = (positionId, subscriptionLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).update({ subscriptionLevel })
        .then(() => dispatch(addSubscription(positionId, subscriptionLevel)));
}

export const startRemoveSubscription = (positionId) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).remove()
        .then(() => dispatch(removeSubscription(positionId)));
}

export const startSetPositionsWatched = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`position_watch/${userId}`).once('value').then((snapshot) => {
        const positionsWatched = [];
        snapshot.forEach((childSnapshot) => {
            positionsWatched.push({
                positionId: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        return dispatch(setPositionsWatched(positionsWatched));
    });
}

export const startSetSubscriptionLevel = (positionId, subscriptionLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).update({ subscriptionLevel })
        .then(() => dispatch(setSubscriptionLevel(positionId, subscriptionLevel)));
}



