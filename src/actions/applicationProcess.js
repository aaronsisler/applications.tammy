import {
    decrementCurrentStep,
    incrementCurrentStep
} from 'Actions/helpers/applicationProcess';

export const startDecrementCurrentStep = () => (dispatch) =>
    dispatch(decrementCurrentStep());

export const startIncrementCurrentStep = () => (dispatch) =>
    dispatch(incrementCurrentStep());
