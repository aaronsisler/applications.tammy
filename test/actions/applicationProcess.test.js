import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
    startDecrementCurrentStep,
    startIncrementCurrentStep,
    startResetCurrentStep,
} from 'Actions/applicationProcess';
import * as applicationProcessActionHelpers from 'Actions/helpers/applicationProcess';

const createMockStore = configureMockStore([thunk]);

describe('Application Process Actions', () => {
    let store;

    beforeEach(() => {
        store = createMockStore();
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

    describe('startResetCurrentStep() method', () => {
        it(`should call dispatch with resetCurrentStep`, async () => {
            const resetCurrentStepMock = jest.spyOn(applicationProcessActionHelpers, 'resetCurrentStep');

            await store.dispatch(startResetCurrentStep());

            expect(store.getActions().length).toBe(1);
            expect(resetCurrentStepMock).toHaveBeenCalled();
        });
    });
});
