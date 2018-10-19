import positionsWatchedReducer from 'Reducers/positionsWatched';
import {
    removeSubscription,
    setPositionsWatched,
    setSubscriptionLevel
} from 'Actions/helpers/positionsWatched';
import positionsWatched from '../fixtures/positionsWatched';

const defaultState = [];

describe('positions watched reducer', () => {
    const [positionWatched] = positionsWatched;
    const { positionId } = positionWatched;

    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should remove subscription', () => {
        const action = removeSubscription(positionId);

        const state = positionsWatchedReducer([positionWatched], action);

        expect(state).toEqual(defaultState);
    });

    it('should set the positions watched', () => {
        const action = setPositionsWatched(positionsWatched);

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual(positionsWatched);
    });

    it('should set subscription level', () => {
        const subscriptionLevel = 'MOCK_SUB_LEVEL';
        const expectedResult = [
            {
                positionId,
                subscriptionLevel
            }];
        const action = setSubscriptionLevel(positionId, subscriptionLevel);

        const state = positionsWatchedReducer([positionWatched], action);

        expect(state).toEqual(expectedResult);
    });
});
