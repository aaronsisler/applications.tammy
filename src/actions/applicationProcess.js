import {
    decrementCurrentStep,
    incrementCurrentStep,
    resetApplicationProcess,
    setPositionId,
} from 'Actions/helpers/applicationProcess';

export const startDecrementCurrentStep = () => (dispatch) =>
    dispatch(decrementCurrentStep());

export const startIncrementCurrentStep = () => (dispatch) =>
    dispatch(incrementCurrentStep());

export const startResetApplicationProcess = () => (dispatch) =>
    dispatch(resetApplicationProcess());

export const startSetPositionId = () => (dispatch, getState) => {
    const { positionId } = getState().position;
    return dispatch(setPositionId(positionId));
}
