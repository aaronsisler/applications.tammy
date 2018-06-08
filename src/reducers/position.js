const positionsReducerDefaultState = [];

const positionsReducer = (state = positionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS':
            return action.positions;
        default:
            return state;
    }
};

export default positionsReducer;

