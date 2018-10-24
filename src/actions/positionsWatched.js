import database from 'Firebase/firebase';
import {
    addSubscription,
    removeSubscription,
    setPositionsWatched,
    setSubscriptionLevel
} from 'Actions/helpers/positionsWatched';

export const startAddSubscription = (positionId, subscriptionLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    const { positions } = getState();
    return database.ref(`position_watch/${userId}/${positionId}`).update({ subscriptionLevel })
        .then(() => {
            const positionFind = positions.find((position) => position.positionId === positionId)
            const positionWatched = { ...positionFind, subscriptionLevel };

            dispatch(addSubscription(positionWatched));
        });
}

export const startRemoveSubscription = (positionId) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).remove()
        .then(() => dispatch(removeSubscription(positionId)));
}

export const startSetPositionsWatched = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    const { positions } = getState();

    return database.ref(`position_watch/${userId}`).once('value').then((snapshot) => {
        let positionsWatched = [];
        snapshot.forEach((childSnapshot) => {
            positionsWatched.push({
                positionId: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        positionsWatched = positionsWatched.map((positionWatched) => ({
            ...(positions.find((position) => positionWatched.positionId === position.positionId)),
            subscriptionLevel: positionWatched.subscriptionLevel
        }));

        return dispatch(setPositionsWatched(positionsWatched));
    });
}

export const startSetSubscriptionLevel = (positionId, subscriptionLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).update({ subscriptionLevel })
        .then(() => dispatch(setSubscriptionLevel(positionId, subscriptionLevel)));
}
