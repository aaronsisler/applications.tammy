export const decrementCurrentStep = () => ({
    type: 'DECREMENT_CURRENT_STEP',
});

export const incrementCurrentStep = () => ({
    type: 'INCREMENT_CURRENT_STEP'
});

export const resetApplicationProcess = () => ({
    type: 'RESET_APPLICATION_PROCESS'
});

export const setPositionId = (positionId) => ({
    type: 'SET_POSITION_ID',
    positionId,
})
