import positionReducer from 'Reducers/position';
import { clearPosition, setPosition } from 'Actions/helpers/position';
import positions from '../fixtures/positions';

const defaultState = null;
const [position] = positions;

describe('position reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }

        const state = positionReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the position', () => {
        const action = setPosition(position);

        const state = positionReducer(undefined, action);

        expect(state).toEqual(position);
    });

    it('should clear the position', () => {
        const action = clearPosition();

        const state = positionReducer(position, action);

        expect(state).toEqual(defaultState);
    });
})
