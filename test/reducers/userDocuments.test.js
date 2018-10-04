import userDocumentsReducer from 'Reducers/userDocuments';
import { addUserDocument, setUserDocuments } from 'Actions/helpers/userDocuments';
import userDocuments from '../fixtures/userDocuments';

const defaultState = [];

describe('User Documents reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = userDocumentsReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the user documents', () => {
        const action = setUserDocuments(userDocuments);

        const state = userDocumentsReducer(undefined, action);

        expect(state).toEqual(userDocuments);
    });

    it('should add the user document', () => {
        const [, userDocument] = userDocuments;
        const action = addUserDocument(userDocument);

        const state = userDocumentsReducer([userDocuments[0]], action);

        expect(state).toEqual(userDocuments);
    });
})
