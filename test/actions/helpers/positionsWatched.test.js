import {
    addPositionWatch,
    removePositionWatch,
    setPositionsWatched,
    setPositionWatchLevel,
} from 'Actions/helpers/positionsWatched';
import { positionsWatchedStore } from '../../fixtures/positionswatched';

describe('Positions Watched Action Helpers', () => {
    const [positionWatched] = positionsWatchedStore;
    const { positionId, notificationLevel } = positionWatched;

    describe('addPositionWatch() method', () => {
        it(`should setup 'add position watch' action object`, () => {
            const action = addPositionWatch(positionWatched);

            expect(action).toEqual({
                type: 'ADD_POSITION_WATCH',
                positionWatched
            });
        });
    });

    describe('removePositionWatch() method', () => {
        it(`should setup 'remove position watch' action object`, () => {
            const action = removePositionWatch(positionId);

            expect(action).toEqual({
                type: 'REMOVE_POSITION_WATCH',
                positionId
            });
        });
    });

    describe('setPositionsWatched() method', () => {
        it(`should setup 'set positions watched' action object`, () => {
            const action = setPositionsWatched(positionsWatchedStore);

            expect(action).toEqual({
                type: 'SET_POSITIONS_WATCHED',
                positionsWatched: positionsWatchedStore
            });
        });
    });

    describe('setPositionWatchLevel() method', () => {
        it(`should setup 'set position watch level' action object`, () => {
            const action = setPositionWatchLevel(positionId, notificationLevel);

            expect(action).toEqual({
                type: 'SET_POSITION_WATCH_LEVEL',
                positionId,
                notificationLevel,
            });
        });
    });
});
