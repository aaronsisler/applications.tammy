const positionsWatchedReducerDefaultState = [];

const positionsWatchedReducer = (state = positionsWatchedReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS_WATCHED':
            return action.positionsWatched;
        case 'ADD_POSITION_WATCH':
                return [...state, action.positionWatched];
        case 'REMOVE_POSITION_WATCH':
            return state.filter((positionwatched) => positionwatched.positionId != action.positionId);
        case 'SET_POSITION_WATCH_LEVEL':
            return state.map((positionWatched) => {
                if (positionWatched.positionId === action.positionId) {
                    return {
                        ...positionWatched,
                        notificationLevel: action.notificationLevel
                    }
                }
                return positionWatched;
            })
        default:
            return state;
    }
};

export default positionsWatchedReducer;

