import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { startSetPosition, startClearPosition, } from 'Actions/position';
import * as positionActionHelpers from 'Actions/helpers/position';
import positions, { defaultPositionsState } from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);

describe('Position Actions', () => {
    describe('startClearPosition() method', () => {
        it(`should call dispatch with clearPositon`, async () => {
            const clearPositionMock = jest.spyOn(positionActionHelpers, 'clearPosition');
            const store = createMockStore();

            await store.dispatch(startClearPosition());

            expect(store.getActions().length).toBe(1);
            expect(clearPositionMock).toHaveBeenCalled();
        });
    });

    describe('startSetPosition() method', () => {
        it(`should call dispatch with setPosition`, async () => {
            const [position] = positions;
            const setPositionMock = jest.spyOn(positionActionHelpers, 'setPosition');
            const store = createMockStore(defaultPositionsState);

            await store.dispatch(startSetPosition(position.positionId));

            expect(store.getActions().length).toBe(1);
            expect(setPositionMock).toHaveBeenLastCalledWith(position);
        });
    });
});
