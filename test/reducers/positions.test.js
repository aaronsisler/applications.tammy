import positionsReducer from 'Reducers/positions';
import { setPositions } from 'Actions/helpers/positions';
import positions from '../fixtures/positions';

const defaultState = [];

describe('positions reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = positionsReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the position', () => {
        const action = setPositions(positions);

        const state = positionsReducer(undefined, action);

        expect(state).toEqual(positions);
    });
})
