import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import { startSetApplicants } from 'Actions/applicants';
import * as applicantsActionHelpers from 'Actions/helpers/applicants';
import applicants, { applicantWithNoNotes } from '../fixtures/applicants';
import positions from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);
const [position] = positions;

describe('Applicants Actions', () => {
    const { positionId } = position;
    const store = createMockStore({ workflow: { position } });
    let once;
    const applicantsMock = [];
    applicants.forEach((applicant) => {
        const val = () => ({ ...applicant });
        applicantsMock.push({ key: applicant.applicantId, val })
    });

    beforeEach(() => {
        once = jest.fn().mockResolvedValue(applicantsMock);
        jest.spyOn(database, 'ref').mockReturnValue({ once });
    });

    afterEach(() => {
        database.ref.mockRestore();
    });

    describe('startSetApplicants() method', () => {
        it(`should call dispatch with setApplicants`, async () => {
            const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

            await store.dispatch(startSetApplicants());

            expect(store.getActions().length).toBe(1);
            expect(setApplicantsMock).toHaveBeenCalled();
        });

        it(`should call once with value`, async () => {
            await store.dispatch(startSetApplicants());

            expect(once).toHaveBeenLastCalledWith('value');
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetApplicants());

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}`);
        });

        describe('when there are no applicants returned', () => {
            beforeEach(() => {
                once = jest.fn().mockResolvedValue([]);
                jest.spyOn(database, 'ref').mockReturnValue({ once });
            });

            it('should call setApplicants with an empty array', async () => {
                const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

                await store.dispatch(startSetApplicants());

                expect(setApplicantsMock).toHaveBeenCalledWith([]);
            });
        });

        describe('when there are applicants returned', () => {
            describe('when there are applicant notes', () => {
                it('should call setApplicants with applicants and a populated applicantNotes', async () => {
                    const setApplicantsMock = jest.spyOn(applicantsActionHelpers, 'setApplicants');

                    await store.dispatch(startSetApplicants());

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

                    await store.dispatch(startSetApplicants());

                    expect(setApplicantsMock).toHaveBeenCalledWith(
                        [{ ...applicantWithNoNotes, applicantNotes: [] }]);
                });
            });
        });
    });
});
