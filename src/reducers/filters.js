const filtersReducerDefaultState = {
    positions: {
        text: '',
    },
    positionWatch: {
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
        case 'SET_POSITION_WATCH_TEXT_FILTER':
            return {
                ...state,
                positionWatch: { text: action.text }
            };
        case 'CLEAR_POSITION_WATCH_TEXT_FILTER':
            return {
                ...state,
                positionWatch: { text: '' }
            };
        default:
            return state;
    }
};

export default filtersReducer;
