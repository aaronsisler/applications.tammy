import {
    removeSubscription,
    setPositionsWatched,
    setSubscriptionLevel,
} from 'Actions/helpers/positionsWatched';
import positionsWatched from '../../fixtures/positionswatched';

describe('Positions Watched Action Helpers', () => {
    const [positionwatched] = positionsWatched;
    const { positionId, subscriptionLevel } = positionwatched;
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
            const action = setPositionsWatched(positionsWatched);

            expect(action).toEqual({
                type: 'SET_POSITIONS_WATCHED',
                positionsWatched
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
