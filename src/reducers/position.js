const positionReducerDefaultState = null;

const positionReducer = (state = positionReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return action.position;
        default:
            return state;
    }
};

export default positionReducer;

