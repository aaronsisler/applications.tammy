import positionsFilterReducer from 'Reducers/filters/positions';

const defaultState =
{
    text: '',
};

describe('positions filter reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }

        const state = positionsFilterReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the text filter', () => {
        const text = 'text';
        const action = {
            type: 'SET_POSITIONS_TEXT_FILTER',
            text
        }

        const state = positionsFilterReducer(undefined, action);

        expect(state).toEqual({ text });
    });

    it('should clear the text filter', () => {
        const action = {
            type: 'CLEAR_POSITIONS_TEXT_FILTER',
        }

        const state = positionsFilterReducer({ text: 'taco' }, action);

        expect(state).toEqual({ text: '' });
    });
})
