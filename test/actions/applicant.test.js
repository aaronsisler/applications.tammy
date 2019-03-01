import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import {
    startAddApplicantNote,
    startSetApplicantStatus
} from 'Actions/applicant';
import * as applicantActionHelpers from 'Actions/helpers/applicant';
import applicants from '../fixtures/applicants';
import { position } from '../fixtures/positions';
import { APPLICANT_STATUSES } from 'Tools/constants';

const createMockStore = configureMockStore([thunk]);

describe('Applicant Actions', () => {
    let store;
    let push;
    let update;
    const [applicant] = applicants;
    const { applicantId } = applicant;
    const { positionId } = position;

    beforeEach(() => {
        store = createMockStore({ applicant, applicants });
        push = jest.fn().mockResolvedValue();
        update = jest.fn().mockResolvedValue();
        jest.spyOn(database, 'ref').mockReturnValue({ push, update });
    });

    afterEach(() => {
        database.ref.mockRestore();
    });

    describe('startAddApplicantNote() method', () => {
        const statusNote = 'mockNewNote';

        it(`should call dispatch with submitApplication`, async () => {
            const addApplicantNoteMock = jest.spyOn(applicantActionHelpers, 'addApplicantNote');

            await store.dispatch(startAddApplicantNote(statusNote));

            expect(store.getActions().length).toBe(1);
            expect(addApplicantNoteMock).toHaveBeenLastCalledWith({ statusNote });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startAddApplicantNote(statusNote));

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}/${applicantId}/applicantNotes`);
        });

        it('should call push with status note', async () => {
            await store.dispatch(startAddApplicantNote(statusNote));

            expect(push).toHaveBeenLastCalledWith({ statusNote });
        });
    });

    describe('startSetApplicantStatus() method', () => {
        const [applicantStatus] = APPLICANT_STATUSES;

        it(`should call dispatch with setApplicantStatus`, async () => {
            const setApplicantStatusMock = jest.spyOn(applicantActionHelpers, 'setApplicantStatus');

            await store.dispatch(startSetApplicantStatus(applicantStatus));

            expect(store.getActions().length).toBe(1);
            expect(setApplicantStatusMock).toHaveBeenLastCalledWith(applicantStatus);
        });

        it(`should call update with applicant status`, async () => {
            await store.dispatch(startSetApplicantStatus(applicantStatus));

            expect(update).toHaveBeenLastCalledWith({ applicantStatus });
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetApplicantStatus(applicantStatus));

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}/${applicantId}`);
        });
    });
});
