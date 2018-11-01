import applicantsReducer from 'Reducers/applicants';
import { setApplicants } from 'Actions/helpers/applicants';
import applicants from '../fixtures/applicants';

const defaultState = [];

describe('applicants reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = applicantsReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the applicants', () => {
        const action = setApplicants(applicants);

        const state = applicantsReducer(undefined, action);

        expect(state).toEqual(applicants);
    });
})
