import positionsWatchedReducer from 'Reducers/positionsWatched';
import {
    addPositionWatch,
    removePositionWatch,
    setPositionsWatched,
    setPositionWatchLevel
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

    it('should add position watch', () => {
        const action = addPositionWatch(positionWatched);

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual([positionWatched]);
    });

    it('should remove position watch', () => {
        const action = removePositionWatch(positionId);

        const state = positionsWatchedReducer([positionWatched], action);

        expect(state).toEqual(defaultState);
    });

    it('should set the positions watched', () => {
        const action = setPositionsWatched(positionsWatchedStore);

        const state = positionsWatchedReducer(undefined, action);

        expect(state).toEqual(positionsWatchedStore);
    });

    describe('when calling set position watch level', () => {
        const notificationLevel = 'MOCK_NOTIFICATION_LEVEL';

        it('should set position watch level if position id is matched', () => {
            const expectedResult = [
                {
                    ...positionWatched,
                    notificationLevel
                }];
            const action = setPositionWatchLevel(positionId, notificationLevel);

            const state = positionsWatchedReducer([positionWatched], action);

            expect(state).toEqual(expectedResult);
        });

        it('should set NOT position watch level if position id is NOT matched', () => {
            const action = setPositionWatchLevel('NON_EXISTANT_POSITION_ID', notificationLevel);

            const state = positionsWatchedReducer(positionsWatchedStore, action);

            expect(state).toEqual(positionsWatchedStore);
        });
    });
});
