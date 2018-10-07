import applicationProcessReducer from 'Reducers/applicationProcess';
import { decrementCurrentStep, incrementCurrentStep } from 'Actions/helpers/applicationProcess';
import { steps } from '../fixtures/applicationProcess';

const defaultState = {
    currentStep: 0,
    maxSteps: steps.length,
    steps
};

describe('application process reducer', () => {
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
})
