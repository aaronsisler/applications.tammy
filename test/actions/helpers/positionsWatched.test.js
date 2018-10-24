import {
    addSubscription,
    removeSubscription,
    setPositionsWatched,
    setSubscriptionLevel,
} from 'Actions/helpers/positionsWatched';
import { positionsWatchedStore } from '../../fixtures/positionswatched';

describe('Positions Watched Action Helpers', () => {
    const [positionWatched] = positionsWatchedStore;
    const { positionId, subscriptionLevel } = positionWatched;

    describe('addSubscription() method', () => {
        it(`should setup 'add subscription' action object`, () => {
            const action = addSubscription(positionWatched);

            expect(action).toEqual({
                type: 'ADD_SUBSCRIPTION',
                positionWatched
            });
        });
    });

    describe('removeSubscription() method', () => {
        it(`should setup 'remove subscription' action object`, () => {
            const action = removeSubscription(positionId);

            expect(action).toEqual({
                type: 'REMOVE_SUBSCRIPTION',
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

    describe('setSubscriptionLevel() method', () => {
        it(`should setup 'set subscription level' action object`, () => {
            const action = setSubscriptionLevel(positionId, subscriptionLevel);

            expect(action).toEqual({
                type: 'SET_SUBSCRIPTION_LEVEL',
                positionId,
                subscriptionLevel,
            });
        });
    });
});
