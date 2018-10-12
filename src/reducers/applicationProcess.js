const steps = [
    { title: "Personal Info" },
    { title: "Documents" },
    { title: "Final Review" },
    { title: "Done" }
];

const applicationProcessReducerDefaultState = {
    currentStep: 0,
    maxSteps: steps.length,
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
        case 'RESET_CURRENT_STEP':
            return { ...state, currentStep: 0 };
        default:
            return state;
    }
};

export default applicationProcessReducer;
