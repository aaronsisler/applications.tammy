import {
    addApplicationUserDocument,
    clearApplication,
    removeApplicationUserDocument,
    setApplicationUser,
} from 'Actions/helpers/application';
import { user } from '../../fixtures/user';
import userDocuments from '../../fixtures/userDocuments';

describe('Application Action Helpers', () => {
    const [userDocument] = userDocuments;

    describe('addApplicationUserDocument() method', () => {
        it(`should setup 'add application user document' action object`, () => {
            const action = addApplicationUserDocument(userDocument);

            expect(action).toEqual({
                type: 'ADD_APPLICATION_USER_DOCUMENT',
                userDocument
            });
        });
    });

    describe('clearApplication() method', () => {
        it(`should setup 'clear application' action object`, () => {
            const action = clearApplication();

            expect(action).toEqual({
                type: 'CLEAR_APPLICATION',
            });
        });
    });

    describe('removeApplicationUserDocument() method', () => {
        it(`should setup 'remove application user document' action object`, () => {
            const { userDocumentId } = userDocument;
            const action = removeApplicationUserDocument(userDocumentId);

            expect(action).toEqual({
                type: 'REMOVE_APPLICATION_USER_DOCUMENT',
                userDocumentId
            });
        });
    });

    describe('setApplicationUser() method', () => {
        it(`should setup 'set application user' action object`, () => {
            const action = setApplicationUser(user);

            expect(action).toEqual({
                type: 'SET_APPLICATION_USER',
                user
            });
        });
    });
});
