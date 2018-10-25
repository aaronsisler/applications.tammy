import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import { startSetPositions } from 'Actions/positions';
import * as positionsActionHelpers from 'Actions/helpers/positions';
import positions from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);

describe('Positions Actions', () => {
    const store = createMockStore();
    let once;
    const positionsMock = [];
    positions.forEach((position) => {
        const val = () => ({ ...position });
        positionsMock.push({ key: position.positionId, val })
    });

    beforeEach(() => {
        once = jest.fn().mockResolvedValue(positionsMock);
        jest.spyOn(database, 'ref').mockReturnValue({ once });
    });

    afterEach(() => {
        database.ref.mockRestore();
    });

    describe('startSetPositions() method', () => {
        it(`should call dispatch with setPositions`, async () => {
            const setPositionsMock = jest.spyOn(positionsActionHelpers, 'setPositions');

            await store.dispatch(startSetPositions());

            expect(store.getActions().length).toBe(1);
            expect(setPositionsMock).toHaveBeenCalledWith(positions);
        });

        it(`should call once with value`, async () => {
            await store.dispatch(startSetPositions());

            expect(once).toHaveBeenLastCalledWith('value');
        });
    });
});
