const filtersReducerDefaultState = {
    positions: {
        text: '',
    },
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS_TEXT_FILTER':
            return {
                ...state,
                positions: { text: action.text }
            };
        case 'CLEAR_POSITIONS_TEXT_FILTER':
            return {
                ...state,
                positions: { text: '' }
            };
        default:
            return state;
    }
};

export default filtersReducer;
