import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import { startSetApplicants } from 'Actions/applicants';
import * as applicantsActionHelpers from 'Actions/helpers/applicants';
import applicants from '../fixtures/applicants';
import positions from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);
const [position] = positions;

describe('Applicants Actions', () => {
    const { positionId } = position;
    const store = createMockStore({ position });
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
            expect(setApplicantsMock).toHaveBeenCalledWith(applicants);
        });

        it(`should call once with value`, async () => {
            await store.dispatch(startSetApplicants());

            expect(once).toHaveBeenLastCalledWith('value');
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetApplicants());

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}`);
        });
    });
});
