import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { startClearApplicant, startSetApplicant } from 'Actions/applicant';
import * as applicantActionHelpers from 'Actions/helpers/applicant';
import applicants from '../fixtures/applicants';

const createMockStore = configureMockStore([thunk]);

describe('Applicant Actions', () => {
    describe('startClearApplicant() method', () => {
        it(`should call dispatch with clearApplicant`, async () => {
            const clearApplicantMock = jest.spyOn(applicantActionHelpers, 'clearApplicant');
            const store = createMockStore();

            await store.dispatch(startClearApplicant());

            expect(store.getActions().length).toBe(1);
            expect(clearApplicantMock).toHaveBeenCalled();
        });
    });

    describe('startSetApplicant() method', () => {
        it(`should call dispatch with setApplicant`, async () => {
            const [applicant] = applicants;
            const setApplicantMock = jest.spyOn(applicantActionHelpers, 'setApplicant');
            const store = createMockStore({ applicants });

            await store.dispatch(startSetApplicant(applicant.applicantId));

            expect(store.getActions().length).toBe(1);
            expect(setApplicantMock).toHaveBeenLastCalledWith(applicant);
        });
    });
});
