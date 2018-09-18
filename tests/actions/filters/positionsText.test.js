import {
    setPositionsTextFilter,
    clearPositionsTextFilter,
} from 'Actions/filters/positionsText';


describe('setPositionsTextFilter() method', () => {
    it(`should setup 'set positions text filter' action object`, () => {
        const text = '123ABC';
        const action = setPositionsTextFilter(text);

        expect(action).toEqual({
            type: 'SET_POSITIONS_TEXT_FILTER',
            text,
        });
    });

    it(`should setup 'set positions text filter' action object using default value`, () => {
        const text = '';
        const action = setPositionsTextFilter();

        expect(action).toEqual({
            type: 'SET_POSITIONS_TEXT_FILTER',
            text,
        });
    });
});

describe('clearPositionsTextFilter() method', () => {
    it(`should setup 'clear positions text filter' action object`, () => {
        const action = clearPositionsTextFilter();

        expect(action).toEqual({
            type: 'CLEAR_POSITIONS_TEXT_FILTER',
        });
    });
});
