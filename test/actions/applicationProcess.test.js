import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
    startDecrementCurrentStep,
    startIncrementCurrentStep,
    startResetApplicationProcess,
    startSetPositionId,
} from 'Actions/applicationProcess';
import * as applicationProcessActionHelpers from 'Actions/helpers/applicationProcess';
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
        it(`should call dispatch with resetApplicationProcess`, async () => {
            const resetApplicationProcessMock = jest.spyOn(applicationProcessActionHelpers, 'resetApplicationProcess');

            await store.dispatch(startResetApplicationProcess());

            expect(store.getActions().length).toBe(1);
            expect(resetApplicationProcessMock).toHaveBeenCalled();
        });
    });

    describe('startSetPositionId() method', () => {
        it(`should call dispatch with setPositionId`, async () => {
            const { positionId } = position;
            const setPositionIdMock = jest.spyOn(applicationProcessActionHelpers, 'setPositionId');

            await store.dispatch(startSetPositionId(positionId));

            expect(store.getActions().length).toBe(1);
            expect(setPositionIdMock).toHaveBeenLastCalledWith(positionId);
        });
    });
});
