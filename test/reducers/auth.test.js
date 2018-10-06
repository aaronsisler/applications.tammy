import authReducer from 'Reducers/auth';
import { login, logout, } from 'Actions/helpers/auth';

const defaultState = {};

describe('auth reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }
        const state = authReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set uid on login', () => {
        const uid = 'auth uid';
        const action = login(uid);

        const state = authReducer(undefined, action);

        expect(state).toEqual({ uid });
    });

    it('should return default state on logout', () => {
        const action = logout();

        const state = authReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });
});
