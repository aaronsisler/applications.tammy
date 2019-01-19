const workflowReducerDefaultState = { position: null };

const workflowReducer = (state = workflowReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_WORKFLOW_POSITION':
            return { ...state, position: action.position };
        case 'CLEAR_WORKFLOW_POSITION':
            return { ...state, position: null };
        default:
            return state;
    }
};

export default workflowReducer;

