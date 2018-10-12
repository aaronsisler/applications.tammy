import {
    decrementCurrentStep,
    incrementCurrentStep,
    resetCurrentStep
} from 'Actions/helpers/applicationProcess';

export const startDecrementCurrentStep = () => (dispatch) =>
    dispatch(decrementCurrentStep());

export const startIncrementCurrentStep = () => (dispatch) =>
    dispatch(incrementCurrentStep());

export const startResetCurrentStep = () => (dispatch) =>
    dispatch(resetCurrentStep());
