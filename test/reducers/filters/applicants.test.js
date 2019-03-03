import applicantsFilterReducer from 'Reducers/filters/applicants';

const defaultState =
{
    text: '',
};

describe('applicants filter reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = applicantsFilterReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the text filter', () => {
        const text = 'text';
        const action = {
            type: 'SET_APPLICANTS_TEXT_FILTER',
            text
        };

        const state = applicantsFilterReducer(undefined, action);

        expect(state).toEqual({ text });
    });
});
