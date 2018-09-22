import {
    setUser,
    editUser,
    clearUser,
} from 'Actions/helpers/user';
import { defaultAuthState } from '../../fixtures/auth';
import userFixture from '../../fixtures/user';

describe('User Helper Actions', () => {
    const userId = defaultAuthState.auth.uid;
    const user = { ...userFixture, userId };

    describe('setUser() method', () => {
        it(`should setup 'set user' action object`, () => {
            const expectedAction = {
                type: 'SET_USER',
                user
            };
            const action = setUser(user);

            expect(action).toEqual(expectedAction);
        })
    })

    describe('editUser() method', () => {
        it(`should setup 'edit user' action object`, () => {
            const updates = { name: 'new name' };
            const expectedAction = {
                type: 'EDIT_USER',
                userId,
                updates,
            };
            const action = editUser(userId, updates);

            expect(action).toEqual(expectedAction)
        })
    })


    describe('clearUser() method', () => {
        it(`should setup 'clear user' action object`, () => {
            const expectedAction = { type: 'CLEAR_USER' };
            const action = clearUser();

            expect(action).toEqual(expectedAction);
        })
    })
})
