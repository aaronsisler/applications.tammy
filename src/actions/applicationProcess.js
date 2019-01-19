import {
    decrementCurrentStep,
    incrementCurrentStep,
    resetApplicationProcess,
} from 'Actions/helpers/applicationProcess';
import { clearWorkflowPosition } from 'Actions/helpers/workflow';
import { clearApplication } from 'Actions/helpers/application';

export const startDecrementCurrentStep = () => (dispatch) =>
    dispatch(decrementCurrentStep());

export const startIncrementCurrentStep = () => (dispatch) =>
    dispatch(incrementCurrentStep());

export const startResetApplicationProcess = () => (dispatch) => {
    dispatch(resetApplicationProcess());
    dispatch(clearApplication());
    dispatch(clearWorkflowPosition());
}
