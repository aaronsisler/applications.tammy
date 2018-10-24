const positionsWatchedReducerDefaultState = [];

const positionsWatchedReducer = (state = positionsWatchedReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS_WATCHED':
            return action.positionsWatched;
        case 'ADD_SUBSCRIPTION':
            {
                const { positionId, subscriptionLevel } = action;
                return [...state, { positionId, subscriptionLevel }];
            }
        case 'REMOVE_SUBSCRIPTION':
            return state.filter((positionwatched) => positionwatched.positionId != action.positionId);
        case 'SET_SUBSCRIPTION_LEVEL':
            return state.map((positionWatched) => {
                if (positionWatched.positionId === action.positionId) {
                    return {
                        ...positionWatched,
                        subscriptionLevel: action.subscriptionLevel
                    }
                }
                return positionWatched;
            })
        default:
            return state;
    }
};

export default positionsWatchedReducer;

