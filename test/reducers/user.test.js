import userReducer from 'Reducers/user';
import { clearUser, editUser, setUser } from 'Actions/helpers/user';
import user from '../fixtures/user';

const defaultState = null;

describe('user reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = userReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set user', () => {
        const action = setUser(user);

        const state = userReducer(undefined, action);

        expect(state).toEqual(user);
    });

    it('should clear user', () => {
        const action = clearUser();

        const state = userReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should update user', () => {
        const updates = {
            name: 'updated name',
        };
        const action = editUser(updates);

        const state = userReducer(user, action);

        expect(state).toEqual({ ...user, ...updates });
    });
})
