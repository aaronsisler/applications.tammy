import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import {
    startAddApplicantNote,
    startSetApplicantStatus
} from 'Actions/applicant';
import * as applicantActionHelpers from 'Actions/helpers/applicant';
import * as datetimeTools from 'Tools/datetime';
import applicants from '../fixtures/applicants';
import positions, { position } from '../fixtures/positions';
import { APPLICANT_STATUSES } from 'Tools/constants';

const createMockStore = configureMockStore([thunk]);

describe('Applicant Actions', () => {
    let store;
    // let getPriorityMock;
    let setWithPriority;
    let push;
    let update;
    const [applicant] = applicants;
    const { applicantId } = applicant;
    const { positionId } = position;
    const mockDateTime = new Date().getTime();

    beforeEach(() => {
        store = createMockStore({ applicants, positions });
        jest.spyOn(datetimeTools, 'getPriority').mockReturnValue(mockDateTime);
        setWithPriority = jest.fn().mockResolvedValue();
        push = jest.fn().mockReturnValue(({ setWithPriority }));
        update = jest.fn().mockResolvedValue();
        jest.spyOn(database, 'ref').mockReturnValue({ push, update });
    });

    afterEach(() => {
        database.ref.mockRestore();
        datetimeTools.getPriority.mockRestore();
    });

    describe('startAddApplicantNote() method', () => {
        const noteMessage = 'mockNewNote';
        const dataObject = { applicantId, noteMessage, positionId };

        it(`should call dispatch with submitApplication`, async () => {
            const addApplicantNoteMock = jest.spyOn(applicantActionHelpers, 'addApplicantNote');

            await store.dispatch(startAddApplicantNote(dataObject));

            expect(store.getActions().length).toBe(1);
            expect(addApplicantNoteMock).toHaveBeenLastCalledWith({ applicantId, noteMessage });
        });

        it(`should call database ref with specific path`, () => {
            store.dispatch(startAddApplicantNote(dataObject));

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}/${applicantId}/applicantNotes`);
        });

        it('should call push', () => {
            store.dispatch(startAddApplicantNote(dataObject));

            expect(push).toHaveBeenCalled();
        });

        it('should call setWithPriority', () => {
            store.dispatch(startAddApplicantNote(dataObject));

            expect(setWithPriority).toHaveBeenLastCalledWith({ noteMessage, priority: mockDateTime }, mockDateTime);
        });
    });

    describe('startSetApplicantStatus() method', () => {
        const [applicantStatus] = APPLICANT_STATUSES;
        const dataObject = { applicantId, applicantStatus, positionId };

        it(`should call dispatch with setApplicantStatus`, async () => {
            const setApplicantStatusMock = jest.spyOn(applicantActionHelpers, 'setApplicantStatus');

            await store.dispatch(startSetApplicantStatus(dataObject));

            expect(store.getActions().length).toBe(1);
            expect(setApplicantStatusMock).toHaveBeenLastCalledWith({ applicantId, applicantStatus });
        });

        it(`should call update with applicant status`, () => {
            store.dispatch(startSetApplicantStatus(dataObject));

            expect(update).toHaveBeenLastCalledWith({ applicantStatus });
        });

        it(`should call database ref with specific path`, () => {
            store.dispatch(startSetApplicantStatus(dataObject));

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}/${applicantId}`);
        });
    });
});
