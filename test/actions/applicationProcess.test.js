import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
    startDecrementCurrentStep,
    startIncrementCurrentStep,
    startResetApplicationProcess,
} from 'Actions/applicationProcess';
import * as applicationProcessActionHelpers from 'Actions/helpers/applicationProcess';
import * as workflowActionHelpers from 'Actions/helpers/workflow';
import * as applicationActionHelpers from 'Actions/helpers/application';
import positions from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);

describe('Application Process Actions', () => {
    const [position] = positions;
    let store;

    beforeEach(() => {
        store = createMockStore({ position });
    });

    describe('startDecrementCurrentStep() method', () => {
        it(`should call dispatch with decrementCurrentStep`, async () => {
            const decrementCurrentStepMock = jest.spyOn(applicationProcessActionHelpers, 'decrementCurrentStep');

            await store.dispatch(startDecrementCurrentStep());

            expect(store.getActions().length).toBe(1);
            expect(decrementCurrentStepMock).toHaveBeenCalled();
        });
    });

    describe('startIncrementCurrentStep() method', () => {
        it(`should call dispatch with incrementCurrentStep`, async () => {
            const incrementCurrentStepMock = jest.spyOn(applicationProcessActionHelpers, 'incrementCurrentStep');

            await store.dispatch(startIncrementCurrentStep());

            expect(store.getActions().length).toBe(1);
            expect(incrementCurrentStepMock).toHaveBeenCalled();
        });
    });

    describe('startResetApplicationProcess() method', () => {
        it(`should call dispatch 3 times`, async () => {
            await store.dispatch(startResetApplicationProcess());

            expect(store.getActions().length).toBe(3);
        });

        it(`should call dispatch with resetApplicationProcess`, async () => {
            const resetApplicationProcessMock = jest.spyOn(applicationProcessActionHelpers, 'resetApplicationProcess');

            await store.dispatch(startResetApplicationProcess());

            expect(resetApplicationProcessMock).toHaveBeenCalled();
        });

        it(`should call dispatch with clearApplication`, async () => {
            const clearApplicationMock = jest.spyOn(applicationActionHelpers, 'clearApplication');

            await store.dispatch(startResetApplicationProcess());

            expect(clearApplicationMock).toHaveBeenCalled();
        });

        it(`should call dispatch with clearWorkflowPosition`, async () => {
            const clearWorkflowPositionMock = jest.spyOn(workflowActionHelpers, 'clearWorkflowPosition');

            await store.dispatch(startResetApplicationProcess());

            expect(clearWorkflowPositionMock).toHaveBeenCalled();
        });
    });
});
