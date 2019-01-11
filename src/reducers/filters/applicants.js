const applicantsFilterReducerDefaultState =
{
    text: '',
};

const applicantsFilterReducer = (state = applicantsFilterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_APPLICANTS_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

export default applicantsFilterReducer;
