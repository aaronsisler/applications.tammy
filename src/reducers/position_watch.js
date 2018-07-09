const positionWatchReducerDefaultState =
{
    position: null,
    positions: [],
};

const positionWatchReducer = (state = positionWatchReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS_WATCHED':
            return {
                ...state,
                positions: action.positionsWatched,
            };
        case 'SET_POSITION_WATCHED':
            return {
                ...state,
                position: state.positions.find((position) => position.id == action.id),
            };
        case 'CLEAR_POSITION_WATCHED':
            return {
                ...state,
                position: null,
            };
        case 'REMOVE_POSITION_WATCHED_FROM_POSITIONS_WATCHED':
            return {
                position: null,
                positions: state.positions.filter((position) => position.id != action.positionId),
            }
        case 'SET_SUBSCRIPTION_LEVEL':
            return {
                ...state,
                position: {
                    ...state.position,
                    subscriptionLevel: action.subscriptionLevel,
                },
                positions: state.positions.map((position) => {
                    if (position.id === action.id) {
                        return {
                            ...position,
                            subscriptionLevel: action.subscriptionLevel
                        }
                    }
                    return position;
                })
            }
        default:
            return state;
    }
};

export default positionWatchReducer;

