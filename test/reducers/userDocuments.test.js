import userDocumentsReducer from 'Reducers/userDocuments';
import userDocuments from '../fixtures/userDocuments';

const defaultState = [];

describe('User Documents reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }

        const state = userDocumentsReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the user documents', () => {
        const action = {
            type: 'SET_USER_DOCUMENTS',
            userDocuments
        }

        const state = userDocumentsReducer(undefined, action);

        expect(state).toEqual(userDocuments);
    });
})
