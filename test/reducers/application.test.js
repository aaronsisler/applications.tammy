import applicationReducer from 'Reducers/application';
import { user } from '../fixtures/user';
import userDocuments from '../fixtures/userDocuments';
import {
    addApplicationUserDocument,
    clearApplication,
    removeApplicationUserDocument,
    setApplicationUser,
} from 'Actions/helpers/application';

const defaultState = { user: {}, userDocuments: [] };
const [userDocument] = userDocuments;
const { userDocumentId } = userDocument;

describe('application reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }
        const state = applicationReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should clear the application', () => {
        const action = clearApplication();

        const state = applicationReducer({ user: { userId: '123' }, userDocuments: [{ mockId: 'mockData' }] }, action);

        expect(state).toEqual({ user: {}, userDocuments: [] });
    });

    it(`should set the application's user`, () => {
        const action = setApplicationUser(user);

        const state = applicationReducer(defaultState, action);

        expect(state).toEqual({ user, userDocuments: [] });
    });

    it(`should add the application's user document`, () => {
        const action = addApplicationUserDocument(userDocument);

        const state = applicationReducer(defaultState, action);

        expect(state).toEqual({ ...defaultState, userDocuments: [userDocument] });
    });

    it(`should remove the application's user document`, () => {
        const action = removeApplicationUserDocument(userDocumentId);

        const state = applicationReducer({ ...defaultState, userDocuments }, action);

        expect(state).toEqual({ ...defaultState, userDocuments: [userDocuments[1]] });
    });
});
