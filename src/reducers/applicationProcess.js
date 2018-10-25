const steps = [
    { title: "Personal Info" },
    { title: "Documents" },
    { title: "Final Review" },
    { title: "Done" }
];

const applicationProcessReducerDefaultState = {
    currentStep: 0,
    maxSteps: steps.length,
    positionId: null,
    steps
};

const applicationProcessReducer = (state = applicationProcessReducerDefaultState, action) => {
    switch (action.type) {
        case 'INCREMENT_CURRENT_STEP':
            return { ...state, currentStep: state.currentStep + 1 }
        case 'DECREMENT_CURRENT_STEP':
            if (state.currentStep === 0) {
                return { ...state };
            }
            return { ...state, currentStep: state.currentStep - 1 }
        case 'RESET_APPLICATION_PROCESS':
            return { ...state, currentStep: 0, positionId: null };
        case 'SET_POSITION_ID':
            return { ...state, positionId: action.positionId }
        default:
            return state;
    }
};

export default applicationProcessReducer;
