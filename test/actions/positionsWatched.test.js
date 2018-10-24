import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import {
    startAddSubscription,
    startRemoveSubscription,
    startSetPositionsWatched,
    startSetSubscriptionLevel,
} from 'Actions/positionsWatched';
import * as positionsWatchedActionHelpers from 'Actions/helpers/positionsWatched';
import { defaultAuthState } from '../fixtures/auth';
import positions from '../fixtures/positions';
import {
    positionsWatchedDatabase,
    positionsWatchedStore
} from '../fixtures/positionsWatched';

const createMockStore = configureMockStore([thunk]);

describe('Positions Watched Actions', () => {
    let store;
    let once;
    let remove;
    let update;
    const [positionWatched] = positionsWatchedDatabase;
    const { positionId } = positionWatched;
    const subscriptionLevel = 'MOCK_SUB_LEVEL';
    const { uid: userId } = defaultAuthState.auth;
    const positionsWatchedMock = [];

    positionsWatchedDatabase.forEach((positionwatched) => {
        const val = () => ({ ...positionwatched });
        positionsWatchedMock.push({ key: positionwatched.positionId, val });
    });

    beforeEach(() => {
        store = createMockStore({ ...defaultAuthState, positions });
        once = jest.fn().mockResolvedValue(positionsWatchedMock);
        remove = jest.fn().mockResolvedValue();
        update = jest.fn().mockResolvedValue();
        jest.spyOn(database, 'ref').mockReturnValue({ once, remove, update });
    });

    describe('startAddSubscription() method', () => {
        it(`should call dispatch with addSubscription`, async () => {
            const addSubscriptionMock = jest.spyOn(positionsWatchedActionHelpers, 'addSubscription');

            await store.dispatch(startAddSubscription(positionId, subscriptionLevel));

            expect(store.getActions().length).toBe(1);
            expect(addSubscriptionMock).toHaveBeenCalledWith({ ...positionsWatchedStore[0], subscriptionLevel });
        });

        it(`should call update with subscription level`, async () => {
            await store.dispatch(startAddSubscription(positionId, subscriptionLevel));

            expect(update).toHaveBeenLastCalledWith({ subscriptionLevel });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startAddSubscription(positionId, subscriptionLevel));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });

    describe('startRemoveSubscription() method', () => {
        it(`should call dispatch with removeSubscription`, async () => {
            const removeSubscriptionMock = jest.spyOn(positionsWatchedActionHelpers, 'removeSubscription');

            await store.dispatch(startRemoveSubscription(positionId));

            expect(store.getActions().length).toBe(1);
            expect(removeSubscriptionMock).toHaveBeenCalledWith(positionId);
        });

        it(`should call remove`, async () => {
            await store.dispatch(startRemoveSubscription(positionId));

            expect(remove).toHaveBeenCalled();
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startRemoveSubscription(positionId));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });

    describe('startSetPositionsWatched() method', () => {
        it(`should call dispatch with setPositions`, async () => {
            const setPositionsWatchedMock = jest.spyOn(positionsWatchedActionHelpers, 'setPositionsWatched');

            await store.dispatch(startSetPositionsWatched());

            expect(store.getActions().length).toBe(1);
            expect(setPositionsWatchedMock).toHaveBeenCalledWith(positionsWatchedStore);
        });

        it(`should call once with value`, async () => {
            await store.dispatch(startSetPositionsWatched());

            expect(once).toHaveBeenLastCalledWith('value');
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

        it(`should call update with subscription level`, async () => {
            await store.dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel));

            expect(update).toHaveBeenLastCalledWith({ subscriptionLevel });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });
});
