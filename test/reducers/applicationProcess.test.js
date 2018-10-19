import applicationProcessReducer from 'Reducers/applicationProcess';
import {
    decrementCurrentStep,
    incrementCurrentStep,
    resetApplicationProcess,
    setPositionId,
} from 'Actions/helpers/applicationProcess';
import { steps } from '../fixtures/applicationProcess';

const defaultState = {
    currentStep: 0,
    maxSteps: steps.length,
    positionId: null,
    steps
};

describe('application process reducer', () => {
    const positionId = 'mockPositionId';

    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }

        const state = applicationProcessReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should decrement the current step if current step is NOT zero', () => {
        const action = decrementCurrentStep();

        const state = applicationProcessReducer({ ...defaultState, currentStep: 2 }, action);

        expect(state).toEqual({ ...defaultState, currentStep: 1 });
    });

    it('should NOT decrement the current step if current step is zero', () => {
        const action = decrementCurrentStep();

        const state = applicationProcessReducer(defaultState, action);

        expect(state).toEqual(defaultState);
    });

    it('should increment the current step', () => {
        const action = incrementCurrentStep();

        const state = applicationProcessReducer(defaultState, action);

        expect(state).toEqual({ ...defaultState, currentStep: 1 });
    });

    it('should reset the application process', () => {
        const action = resetApplicationProcess();

        const state = applicationProcessReducer({ ...defaultState, currentStep: 2, positionId }, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the position id', () => {
        const action = setPositionId(positionId);

        const state = applicationProcessReducer(defaultState, action);

        expect(state).toEqual({ ...defaultState, positionId });
    });
})
