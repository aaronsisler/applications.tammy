import { setApplicants } from 'Actions/helpers/applicants';
import applicants from '../../fixtures/applicants';

describe('Applicants Action Helpers', () => {
    describe('setApplicants() method', () => {
        it(`should setup 'set applicants' action object`, () => {
            const action = setApplicants(applicants);

            expect(action).toEqual({
                type: 'SET_APPLICANTS',
                applicants
            })
        })
    })
})
