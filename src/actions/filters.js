export const setPositionsTextFilter = (text = '') => ({
    type: 'SET_POSITIONS_TEXT_FILTER',
    text
});

export const clearPositionsTextFilter = () => ({
    type: 'CLEAR_POSITIONS_TEXT_FILTER'
});

export const setPositionWatchTextFilter = (text = '') => ({
    type: 'SET_POSITION_WATCH_TEXT_FILTER',
    text
});

export const clearPositionWatchTextFilter = () => ({
    type: 'CLEAR_POSITION_WATCH_TEXT_FILTER'
});
