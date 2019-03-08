import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as applicationActionHelpers from 'Actions/helpers/application';
import database from 'Firebase/firebase';
import { position, positionId } from '../fixtures/positions';
import { user } from '../fixtures/user';
import userDocuments from '../fixtures/userDocuments';
import {
    startAddApplicationUserDocument,
    startRemoveApplicationUserDocument,
    startSetApplicationUser,
    startSubmitApplication
} from 'Actions/application';

const createMockStore = configureMockStore([thunk]);

describe('Application Actions', () => {
    const [userDocument] = userDocuments;
    const { userDocumentId } = userDocument;

    describe('startAddApplicationUserDocument() method', () => {
        it(`should call dispatch with addApplicationUserDocument`, async () => {
            const addApplicationUserDocumentMock = jest.spyOn(applicationActionHelpers, 'addApplicationUserDocument');
            const store = createMockStore({ userDocuments });

            await store.dispatch(startAddApplicationUserDocument(userDocumentId));

            expect(store.getActions().length).toBe(1);
            expect(addApplicationUserDocumentMock).toHaveBeenLastCalledWith(userDocument);
        });
    });

    describe('startRemoveApplicationUserDocument() method', () => {
        it(`should call dispatch with removeApplicationUserDocument`, async () => {
            const removeApplicationUserDocumentMock = jest.spyOn(applicationActionHelpers, 'removeApplicationUserDocument');
            const store = createMockStore();

            await store.dispatch(startRemoveApplicationUserDocument(userDocumentId));

            expect(store.getActions().length).toBe(1);
            expect(removeApplicationUserDocumentMock).toHaveBeenLastCalledWith(userDocumentId);
        });
    });

    describe('startSetApplicationUser() method', () => {
        it(`should call dispatch with setApplicationUser`, async () => {
            const setApplicationUserMock = jest.spyOn(applicationActionHelpers, 'setApplicationUser');
            const store = createMockStore({ user });

            await store.dispatch(startSetApplicationUser(user));

            expect(store.getActions().length).toBe(1);
            expect(setApplicationUserMock).toHaveBeenLastCalledWith(user);
        });
    });

    describe('startSubmitApplication() method', () => {
        let store;
        const push = jest.fn().mockResolvedValue({});

        beforeEach(() => {
            store = createMockStore({ application: { user, userDocuments }, workflow: { position } });
            jest.spyOn(database, 'ref').mockReturnValue({ push });
        });

        it(`should call dispatch with submitApplication`, async () => {
            const submitApplicationMock = jest.spyOn(applicationActionHelpers, 'submitApplication');

            await store.dispatch(startSubmitApplication(positionId));

            expect(store.getActions().length).toBe(1);
            expect(submitApplicationMock).toHaveBeenCalled();
        });

        it(`should call database ref with specific path`, () => {
            store.dispatch(startSubmitApplication(positionId));

            expect(database.ref).toHaveBeenLastCalledWith(`applicants/${positionId}`);
        });

        it('should call push with user and user documents', () => {
            store.dispatch(startSubmitApplication(positionId));

            expect(push).toHaveBeenLastCalledWith({
                applicantStatus: 'APPLIED',
                user,
                userDocuments,
            });
        });
    });
});
