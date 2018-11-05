import applicantReducer from 'Reducers/applicant';
import { clearApplicant, setApplicant } from 'Actions/helpers/applicant';
import applicants from '../fixtures/applicants';

const defaultState = null;
const [applicant] = applicants;

describe('applicant reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }

        const state = applicantReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should clear the applicant', () => {
        const action = clearApplicant();

        const state = applicantReducer(applicant, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the applicant', () => {
        const action = setApplicant(applicant);

        const state = applicantReducer(undefined, action);

        expect(state).toEqual(applicant);
    });
})
