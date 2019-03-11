import applicantsReducer from 'Reducers/applicants';
import { addApplicantNote, setApplicantStatus } from 'Actions/helpers/applicant';
import { setApplicants } from 'Actions/helpers/applicants';
import applicants, { applicantId } from '../fixtures/applicants';

const defaultState = [];

describe('applicants reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = applicantsReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });


    describe('SET_APPLICANTS', () => {
        it('should set the applicants if provided', () => {
            const action = setApplicants(applicants);

            const state = applicantsReducer(undefined, action);

            expect(state).toEqual(applicants);
        });

        it('should set to default state if not provided', () => {
            const action = setApplicants();

            const state = applicantsReducer(undefined, action);

            expect(state).toEqual([]);
        });
    });

    describe('SET_APPLICANT_STATUS', () => {
        const applicantStatus = 'NEW STATUS';

        describe('when applicantId is matched', () => {
            it('should set the applicant status', () => {
                const action = setApplicantStatus({ applicantId, applicantStatus });

                const state = applicantsReducer(applicants, action);

                expect(state).toEqual([{ ...applicants[0], applicantStatus }, applicants[1]]);
            });
        });

        describe('when applicantId is NOT matched', () => {
            it('should NOT set the applicant status', () => {
                const action = setApplicantStatus({ applicantId: 'no matching applicant id', applicantStatus });

                const state = applicantsReducer(applicants, action);

                expect(state).toEqual(applicants);
            });
        });
    });

    describe('ADD_APPLICANT_NOTE', () => {
        const noteMessage = 'New Note';

        describe('when applicantId is matched', () => {
            it('should add a note to the beginning of the applicant notes array', () => {
                const action = addApplicantNote({ applicantId, noteMessage });

                const state = applicantsReducer(applicants, action);

                expect(state).toEqual([{ ...applicants[0], applicantNotes: [{ noteMessage }, ...applicants[0].applicantNotes] }, applicants[1]]);
            });
        });

        describe('when applicantId is NOT matched', () => {
            it('should NOT add a note to any applicant notes array', () => {
                const action = setApplicantStatus({ applicantId: 'no matching applicant id', noteMessage });

                const state = applicantsReducer(applicants, action);

                expect(state).toEqual(applicants);
            });
        });
    });
})
