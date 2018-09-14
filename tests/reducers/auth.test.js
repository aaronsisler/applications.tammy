import authReducer from 'Reducers/auth';

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
        const action = {
            type: 'LOGIN',
            uid
        }
        const state = authReducer(undefined, action);

        expect(state).toEqual({ uid });
    })

    it('should return default state on logout', () => {
        const action = {
            type: 'LOGOUT',
        }
        const state = authReducer(undefined, action);

        expect(state).toEqual(defaultState);
    })
})
