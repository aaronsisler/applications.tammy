import applicationReducer from 'Reducers/application';
import { clearApplication, setApplicationUser } from 'Actions/helpers/application';
import { user } from '../fixtures/user';

const defaultState = { user: {}, userDocuments: [] };

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
});
