import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../src/firebase/firebase';
import { startSetPositions, } from 'Actions/positions';
import * as positionsActionHelpers from 'Actions/helpers/positions';
import positions, { defaultPositionsState } from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);

describe('Positions Actions', () => {
    const positionsMock = [];
    positions.forEach((position) => {
        const val = () => ({ ...position });
        positionsMock.push({ key: position.positionId, val })
    })

    beforeEach(() => {
        const once = jest.fn();
        once.mockResolvedValue(positionsMock);
        jest.spyOn(database, 'ref').mockReturnValue({ once });
    })

    afterEach(() => {
        database.ref.mockRestore();
    })

    describe('startSetPositions() method', () => {
        it(`should call dispatch with setPositions`, async () => {
            const setPositionsMock = jest.spyOn(positionsActionHelpers, 'setPositions');
            const store = createMockStore(defaultPositionsState);

            await store.dispatch(startSetPositions());

            expect(store.getActions().length).toBe(1);
            expect(setPositionsMock).toHaveBeenCalledWith(positions);
        })
    })
})
