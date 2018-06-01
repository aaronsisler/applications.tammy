const userReducerDefaultState = [];

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.user;
        case 'EDIT_USER':
            return {
                ...state,
                ...action.updates
            }
        default:
            return state;
    }
};

export default userReducer;

