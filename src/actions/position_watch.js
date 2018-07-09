import database from '../firebase/firebase';

export const setPositionsWatched = (positionsWatched) => ({
    type: 'SET_POSITIONS_WATCHED',
    positionsWatched
});

export const startSetPositionsWatched = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    database.ref(`position_watch/${userId}`).once('value').then((snapshot) => {
        const positionsWatched = [];
        snapshot.forEach((childSnapshot) => {
            positionsWatched.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        dispatch(setPositionsWatched(positionsWatched));
    });
}

export const setPositionWatched = (id) => ({
    type: 'SET_POSITION_WATCHED',
    id
});

export const startSetPositionWatched = (id) => (dispatch) => {
    dispatch(setPositionWatched(id));
}

export const clearPositionWatched = () => ({
    type: 'CLEAR_POSITION_WATCHED'
});

export const startClearPositionWatched = () => (dispatch) => {
    dispatch(setPositionWatched());
}

export const setSubscriptionLevel = (id, subscriptionLevel) => ({
    type: 'SET_SUBSCRIPTION_LEVEL',
    id,
    subscriptionLevel
});

export const startSetSubscriptionLevel = (positionId, subscriptionLevel) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    if (subscriptionLevel == 'NONE') {
        return database.ref(`position_watch/${userId}/${positionId}`).remove()
            .then(() => {
                dispatch(removePositionWatchedFromPositionsWatched(positionId));
            });
    }

    database.ref(`position_watch/${userId}/${positionId}`).update({ subscriptionLevel })
        .then(() => {
            dispatch(setSubscriptionLevel(positionId, subscriptionLevel));
        });
}

export const removePositionWatchedFromPositionsWatched = (positionId) => ({
    type: 'REMOVE_POSITION_WATCHED_FROM_POSITIONS_WATCHED',
    positionId
});

//Set Watched Position List
//Set Watched Position
//Clear Watched Position
//Add Position to watch list
//Update subscription level on watched position
//Remove subscription from watched position (combine with action abouve possibly?)
