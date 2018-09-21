import { setPositions, } from 'Actions/helpers/positions';
import positions from '../../fixtures/positions';

describe('Positions Action Helpers', () => {
    describe('setPositions() method', () => {
        it(`should setup 'set positions' action object`, () => {
            const action = setPositions(positions);

            expect(action).toEqual({
                type: 'SET_POSITIONS',
                positions
            })
        })
    })
})
