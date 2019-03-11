import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import {
    startClearApplicants,
    startSetApplicants,
    startSetApplicantsTextFilter,
} from 'Actions/applicants';
import * as applicantsActionHelpers from 'Actions/helpers/applicants';
import * as applicantsTextFilters from 'Actions/filters/applicantsText';
import applicants, { applicantWithNoNotes } from '../fixtures/applicants';
import { positionId } from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);

describe('Applicants Actions', () => {
    let store;
    let once;
    const applicantsMock = [];
    applicants.forEach((applicant) => {
        const val = () => ({ ...applicant });
        applicantsMock.push({ key: applicant.applicantId, val })
    });

    beforeEach(() => {
        store = createMockStore();
        once = jest.fn().mockResolvedValue(applicantsMock);
        jest.spyOn(database, 'ref').mockReturnValue({ once });
    });

    afterEach(() => {
        database.ref.mockRestore();
    });

    describe('startClearApplicants()', () => {
        it('should call setApplicants', async () => {
            const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

            await store.dispatch(startClearApplicants());

            expect(store.getActions().length).toBe(1);
            expect(setApplicantsMock).toHaveBeenCalled();
        });
    });

    describe('startSetApplicants()', () => {
        it(`should call once with value`, () => {
            store.dispatch(startSetApplicants(positionId));

            expect(once).toHaveBeenLastCalledWith('value');
        });

        it(`should call database ref with specific path`, () => {
            store.dispatch(startSetApplicants(positionId));

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}`);
        });

        describe('when there are no applicants returned', () => {
            beforeEach(() => {
                once = jest.fn().mockResolvedValue([]);
                jest.spyOn(database, 'ref').mockReturnValue({ once });
            });

            it('should call setApplicants with an empty array', async () => {
                const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

                await store.dispatch(startSetApplicants(positionId));

                expect(store.getActions().length).toBe(1);
                expect(setApplicantsMock).toHaveBeenCalledWith([]);
            });
        });

        describe('when there are applicants returned', () => {
            describe('when there are applicant notes', () => {
                it('should call setApplicants with applicants and a populated applicantNotes', async () => {
                    const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

                    await store.dispatch(startSetApplicants(positionId));

                    expect(store.getActions().length).toBe(1);
                    expect(setApplicantsMock).toHaveBeenCalledWith(applicants);
                });
            });

            describe('when there are no applicant notes', () => {
                beforeEach(() => {
                    const applicantsWithNoNotesMock = [];
                    const val = () => ({ ...applicantWithNoNotes });
                    applicantsWithNoNotesMock.push({ key: applicantWithNoNotes.applicantId, val });

                    once = jest.fn().mockResolvedValue(applicantsWithNoNotesMock);
                    jest.spyOn(database, 'ref').mockReturnValue({ once });
                });

                it('should call setApplicants with applicants and an empty array for applicantNotes', async () => {
                    const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

                    await store.dispatch(startSetApplicants(positionId));

                    expect(store.getActions().length).toBe(1);
                    expect(setApplicantsMock).toHaveBeenCalledWith(
                        [{ ...applicantWithNoNotes, applicantNotes: [] }]);
                });
            });
        });
    });

    describe('startSetApplicantsTextFilter()', () => {
        it('should call setApplicantsTextFilter with text', async () => {
            const mockTextFilter = 'text filter';
            const setApplicantsTextFilterMock = jest.spyOn(applicantsTextFilters, 'setApplicantsTextFilter');

            await store.dispatch(startSetApplicantsTextFilter(mockTextFilter));

            expect(store.getActions().length).toBe(1);
            expect(setApplicantsTextFilterMock).toHaveBeenCalledWith(mockTextFilter);
        });
    });
});
