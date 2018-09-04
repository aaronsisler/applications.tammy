import {
    setUser,
    editUser,
    clearUser,
} from '../../src/actions/user';
import user from '../fixtures/user';


describe('setUser() method', () => {
    it(`should setup 'set user' action object`, () => {
        const action = setUser(user);

        expect(action).toEqual({
            type: 'SET_USER',
            user
        })
    })
})

describe('editUser() method', () => {
    it(`should setup 'edit user' action object`, () => {
        const userId = user.id;
        const updates = { name: 'new name' };
        const action = editUser(userId, updates);

        expect(action).toEqual({
            type: 'EDIT_USER',
            userId,
            updates
        })
    })
})

describe('clearUser() method', () => {
    it(`should setup 'clear user' action object`, () => {
        const action = clearUser();

        expect(action).toEqual({
            type: 'CLEAR_USER',
        })
    })
})
