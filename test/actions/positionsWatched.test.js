import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import {
    startAddPositionWatch,
    startRemovePositionWatch,
    startSetPositionsWatched,
    startSetPositionWatchLevel,
} from 'Actions/positionsWatched';
import * as positionsWatchedActionHelpers from 'Actions/helpers/positionsWatched';
import { defaultAuthState } from '../fixtures/auth';
import positions from '../fixtures/positions';
import positionsWatched, { positionsWatchedDatabase } from '../fixtures/positionsWatched';

const createMockStore = configureMockStore([thunk]);

describe('Positions Watched Actions', () => {
    let store;
    let once;
    let remove;
    let update;
    const [positionWatched] = positionsWatchedDatabase;
    const { positionId } = positionWatched;
    const notificationLevel = 'MOCK_NOTIFICATION_LEVEL';
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

    describe('startAddPositionWatch() method', () => {
        it(`should call dispatch with addPositionWatch`, async () => {
            const addPositionWatchMock = jest.spyOn(positionsWatchedActionHelpers, 'addPositionWatch');

            await store.dispatch(startAddPositionWatch(positionId, notificationLevel));

            expect(store.getActions().length).toBe(1);
            expect(addPositionWatchMock).toHaveBeenCalledWith({ ...positionsWatched[0], notificationLevel });
        });

        it(`should call update with notification level`, async () => {
            await store.dispatch(startAddPositionWatch(positionId, notificationLevel));

            expect(update).toHaveBeenLastCalledWith({ notificationLevel });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startAddPositionWatch(positionId, notificationLevel));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });

    describe('startRemovePositionWatch() method', () => {
        it(`should call dispatch with removePositionWatch`, async () => {
            const removePositionWatchMock = jest.spyOn(positionsWatchedActionHelpers, 'removePositionWatch');

            await store.dispatch(startRemovePositionWatch(positionId));

            expect(store.getActions().length).toBe(1);
            expect(removePositionWatchMock).toHaveBeenCalledWith(positionId);
        });

        it(`should call remove`, async () => {
            await store.dispatch(startRemovePositionWatch(positionId));

            expect(remove).toHaveBeenCalled();
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startRemovePositionWatch(positionId));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });

    describe('startSetPositionsWatched() method', () => {
        it(`should call dispatch with setPositions`, async () => {
            const setPositionsWatchedMock = jest.spyOn(positionsWatchedActionHelpers, 'setPositionsWatched');

            await store.dispatch(startSetPositionsWatched());

            expect(store.getActions().length).toBe(1);
            expect(setPositionsWatchedMock).toHaveBeenCalledWith(positionsWatched);
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

    describe('startSetPositionWatchLevel() method', () => {
        it(`should call dispatch with setPositionWatchLevel`, async () => {
            const setPositionWatchLevelMock = jest.spyOn(positionsWatchedActionHelpers, 'setPositionWatchLevel');

            await store.dispatch(startSetPositionWatchLevel(positionId, notificationLevel));

            expect(store.getActions().length).toBe(1);
            expect(setPositionWatchLevelMock).toHaveBeenCalledWith(positionId, notificationLevel);
        });

        it(`should call update with notification level`, async () => {
            await store.dispatch(startSetPositionWatchLevel(positionId, notificationLevel));

            expect(update).toHaveBeenLastCalledWith({ notificationLevel });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetPositionWatchLevel(positionId, notificationLevel));

            expect(database.ref).toHaveBeenLastCalledWith(`position_watch/${userId}/${positionId}`);
        });
    });
});
