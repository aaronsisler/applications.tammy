import {
    setApplicantsTextFilter,
} from 'Actions/filters/applicantsText';


describe('setPositionsTextFilter() method', () => {
    it(`should setup 'set applicants text filter' action object`, () => {
        const text = '123ABC';
        const action = setApplicantsTextFilter(text);

        expect(action).toEqual({
            type: 'SET_APPLICANTS_TEXT_FILTER',
            text,
        });
    });

    it(`should setup 'set applicants text filter' action object using default value`, () => {
        const text = '';
        const action = setApplicantsTextFilter();

        expect(action).toEqual({
            type: 'SET_APPLICANTS_TEXT_FILTER',
            text,
        });
    });
});
