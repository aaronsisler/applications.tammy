import positionsWatchedReducer from 'Reducers/positionsWatched';
import {
    addSubscription,
    removeSubscription,
    setPositionsWatched,
    setSubscriptionLevel
} from 'Actions/helpers/positionsWatched';
import {
    positionsWatchedStore
} from '../fixtures/positionsWatched';

const defaultState = [];

describe('positions watched reducer', () => {
    const [positionWatched] = positionsWatchedStore;
    const { positionId } = positionWatched;

    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should add subscription', () => {
        const action = addSubscription(positionWatched);

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual([positionWatched]);
    });

    it('should remove subscription', () => {
        const action = removeSubscription(positionId);

        const state = positionsWatchedReducer([positionWatched], action);

        expect(state).toEqual(defaultState);
    });

    it('should set the positions watched', () => {
        const action = setPositionsWatched(positionsWatchedStore);

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual(positionsWatchedStore);
    });

    describe('when calling set subscription level', () => {
        it('should set subscription level if position id is matched', () => {
            const subscriptionLevel = 'MOCK_SUB_LEVEL';
            const expectedResult = [
                {
                    ...positionWatched,
                    subscriptionLevel
                }];
            const action = setSubscriptionLevel(positionId, subscriptionLevel);

            const state = positionsWatchedReducer([positionWatched], action);

            expect(state).toEqual(expectedResult);
        });

        it('should set NOT subscription level if position id is NOT matched', () => {
            const action = setSubscriptionLevel('NON_EXISTANT_POSITION_ID', 'MOCK SUBSCRIPTION');

            const state = positionsWatchedReducer(positionsWatchedStore, action);

            expect(state).toEqual(positionsWatchedStore);
        });
    });
});
