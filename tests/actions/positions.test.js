import {
    setPositions,
} from '../../src/actions/positions';
import positions from '../fixtures/positions';

describe('setPositions() method', () => {
    it(`should setup 'set positions' action object`, () => {
        const action = setPositions(positions);

        expect(action).toEqual({
            type: 'SET_POSITIONS',
            positions
        })
    })
})
