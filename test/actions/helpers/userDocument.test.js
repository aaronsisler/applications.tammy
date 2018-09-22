import {
    setUserDocuments,
    addUserDocument,
} from 'Actions/helpers/userDocument';
import userDocuments from '../../fixtures/userDocuments';

describe('User Helper Actions', () => {
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

    describe('editUser() method', () => {
        it(`should setup 'edit user' action object`, () => {
            const [userDocument] = userDocuments;
            const expectedAction = {
                type: 'ADD_USER_DOCUMENT',
                userDocument,
            };
            const action = addUserDocument(userDocument);

            expect(action).toEqual(expectedAction)
        })
    })
})
