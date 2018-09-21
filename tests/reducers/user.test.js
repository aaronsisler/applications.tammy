import userReducer from 'Reducers/user';
import user from '../fixtures/user';

const defaultState = null;

describe('user reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }
        const state = userReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set user', () => {
        const action = {
            type: 'SET_USER',
            user
        }
        const state = userReducer(undefined, action);

        expect(state).toEqual(user);
    })

    it('should clear user', () => {
        const action = {
            type: 'CLEAR_USER',
        }
        const state = userReducer(undefined, action);

        expect(state).toEqual(defaultState);
    })

    it('should update user', () => {
        const updates = {
            ...user,
            name: 'updated name',
        }
        const action = {
            type: 'EDIT_USER',
            updates
        }
        const state = userReducer(user, action);

        expect(state).toEqual(updates);
    })
})
