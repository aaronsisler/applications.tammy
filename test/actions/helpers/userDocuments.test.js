import {
    setUserDocuments,
    addUserDocument,
} from 'Actions/helpers/userDocuments';
import userDocuments from '../../fixtures/userDocuments';

describe('User Documents Helper Actions', () => {
    describe('setUserDocuments() method', () => {
        it(`should setup 'set user document' action object`, () => {
            const expectedAction = {
                type: 'SET_USER_DOCUMENTS',
                userDocuments
            };

            const action = setUserDocuments(userDocuments);

            expect(action).toEqual(expectedAction);
        })
    })

    describe('addUserDocument() method', () => {
        it(`should setup 'add user document' action object`, () => {
            const [userDocument] = userDocuments;
            const expectedAction = {
                type: 'ADD_USER_DOCUMENT',
                userDocument,
            };

            const action = addUserDocument(userDocument);

            expect(action).toEqual(expectedAction);
        });
    });
})
