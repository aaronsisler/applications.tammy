export const addPositionWatch = (positionWatched) => ({
    type: 'ADD_POSITION_WATCH',
    positionWatched,
});

export const removePositionWatch = (positionId) => ({
    type: 'REMOVE_POSITION_WATCH',
    positionId,
});

export const setPositionsWatched = (positionsWatched) => ({
    type: 'SET_POSITIONS_WATCHED',
    positionsWatched,
});

export const setPositionWatchLevel = (positionId, notificationLevel) => ({
    type: 'SET_POSITION_WATCH_LEVEL',
    positionId,
    notificationLevel,
});
