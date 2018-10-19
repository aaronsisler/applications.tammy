import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import {
    startSetPositionsWatched,
    startSetSubscriptionLevel
} from 'Actions/positionsWatched';
import * as positionsWatchedActionHelpers from 'Actions/helpers/positionsWatched';
import { defaultAuthState } from '../fixtures/auth';
import positionsWatched from '../fixtures/positionsWatched';

const createMockStore = configureMockStore([thunk]);

describe('Positions Watched Actions', () => {
    let store;
    let update;
    const [positionWatched] = positionsWatched;
    const { positionId } = positionWatched;
    const subscriptionLevel = 'MOCK_SUB_LEVEL';
    const { uid: userId } = defaultAuthState.auth;
    const positionsWatchedMock = [];

    positionsWatched.forEach((positionwatched) => {
        const val = () => ({ ...positionwatched });
        positionsWatchedMock.push({ key: positionwatched.positionId, val })
    });

    beforeEach(() => {
        store = createMockStore(defaultAuthState);
        const once = jest.fn();
        update = jest.fn();
        once.mockResolvedValue(positionsWatchedMock);
        update.mockResolvedValue();
        jest.spyOn(database, 'ref').mockReturnValue({ once, update });
    });

    describe('startSetPositionsWatched() method', () => {
        it(`should call dispatch with setPositions`, async () => {
            const setPositionsWatchedMock = jest.spyOn(positionsWatchedActionHelpers, 'setPositionsWatched');

            await store.dispatch(startSetPositionsWatched());

            expect(store.getActions().length).toBe(1);
            expect(setPositionsWatchedMock).toHaveBeenCalledWith(positionsWatched);
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetPositionsWatched());

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}`);
        });
    });

    describe('startSetSubscriptionLevel() method', () => {
        it(`should call dispatch with setSubscriptionLevel`, async () => {
            const setSubscriptionLevelMock = jest.spyOn(positionsWatchedActionHelpers, 'setSubscriptionLevel');

            await store.dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel));

            expect(store.getActions().length).toBe(1);
            expect(setSubscriptionLevelMock).toHaveBeenCalledWith(positionId, subscriptionLevel);
        });

        it(`should call update subscription level`, async () => {
            await store.dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel));

            expect(update).toHaveBeenLastCalledWith({ subscriptionLevel });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });
});
