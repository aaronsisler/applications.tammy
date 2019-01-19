import applicantReducer from 'Reducers/applicant';
import {
    addApplicantNote,
    clearApplicant,
    setApplicant,
    setApplicantStatus
} from 'Actions/helpers/applicant';
import applicants, { applicantWithNoNotes } from '../fixtures/applicants';

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

    it('should add the applicant note', () => {
        const statusNote = 'newMockNote';

        const action = addApplicantNote({ statusNote });

        const state = applicantReducer(applicantWithNoNotes, action);

        expect(state).toEqual({ ...applicantWithNoNotes, applicantNotes: [{ statusNote }] });
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
