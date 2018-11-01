import {
    decrementCurrentStep,
    incrementCurrentStep,
    resetApplicationProcess,
} from 'Actions/helpers/applicationProcess';

export const startDecrementCurrentStep = () => (dispatch) =>
    dispatch(decrementCurrentStep());

export const startIncrementCurrentStep = () => (dispatch) =>
    dispatch(incrementCurrentStep());

export const startResetApplicationProcess = () => (dispatch) =>
    dispatch(resetApplicationProcess());
