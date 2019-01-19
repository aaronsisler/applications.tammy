import { clearApplicant, setApplicant, } from 'Actions/helpers/applicant';
import applicants from '../../fixtures/applicants';

describe('Applicant Action Helpers', () => {
    describe('clearApplicant() method', () => {
        it(`should setup 'clear applicant' action object`, () => {
            const action = clearApplicant();

            expect(action).toEqual({
                type: 'CLEAR_APPLICANT',
            });
        });
    });

    describe('setApplicant() method', () => {
        it(`should setup 'set applicant' action object`, () => {
            const [applicant] = applicants;
            const action = setApplicant(applicant);

            expect(action).toEqual({
                type: 'SET_APPLICANT',
                applicant
            });
        });
    });
});
