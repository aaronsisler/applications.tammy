import database from 'Firebase/firebase';
import {
    addPositionWatch,
    removePositionWatch,
    setPositionsWatched,
    setPositionWatchLevel
} from 'Actions/helpers/positionsWatched';

export const startAddPositionWatch = (positionId, notificationLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    const { positions } = getState();
    return database.ref(`position_watch/${userId}/${positionId}`).update({ notificationLevel })
        .then(() => {
            const positionFind = positions.find((position) => position.positionId === positionId)
            const positionWatched = { ...positionFind, notificationLevel };

            dispatch(addPositionWatch(positionWatched));
        });
}

export const startRemovePositionWatch = (positionId) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).remove()
        .then(() => dispatch(removePositionWatch(positionId)));
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
            notificationLevel: positionWatched.notificationLevel
        }));

        return dispatch(setPositionsWatched(positionsWatched));
    });
}

export const startSetPositionWatchLevel = (positionId, notificationLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    return database.ref(`position_watch/${userId}/${positionId}`).update({ notificationLevel })
        .then(() => dispatch(setPositionWatchLevel(positionId, notificationLevel)));
}
