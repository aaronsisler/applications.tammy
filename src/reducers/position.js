const positionReducerDefaultState = null;

const positionReducer = (state = positionReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return action.position;
        case 'CLEAR_POSITION':
            return null;
        default:
            return state;
    }
};

export default positionReducer;

