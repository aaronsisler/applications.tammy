import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import { startSetUser, startEditUser, startClearUser, } from '../../src/actions/user';
import * as userActionHelpers from 'Actions/helpers/user';
import { defaultAuthState } from '../fixtures/auth';
import userFixture from '../fixtures/user';

const createMockStore = configureMockStore([thunk]);

describe('User Actions', () => {
    let store;
    let once;
    let update;
    const userId = defaultAuthState.auth.uid;
    const user = { ...userFixture, userId };

    beforeEach(() => {
        store = createMockStore(defaultAuthState);
        update = jest.fn().mockResolvedValue();
        const val = () => ({ ...user });
        once = jest.fn().mockResolvedValue({ key: userId, val });
        jest.spyOn(database, 'ref').mockReturnValue({ once, update });
    })

    afterEach(() => {
        database.ref.mockRestore();
    })


    describe('startSetUser() method', () => {
        it('should call dispatch with setUser', async () => {
            const setUserMock = jest.spyOn(userActionHelpers, 'setUser');

            await store.dispatch(startSetUser());

            expect(store.getActions().length).toBe(1);
            expect(setUserMock).toHaveBeenCalledWith(user);
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startSetUser());

            expect(database.ref).toHaveBeenLastCalledWith(`users/${userId}`);
        });

        it(`should call once with value`, async () => {
            await store.dispatch(startSetUser());

            expect(once).toHaveBeenLastCalledWith('value');
        });
    });

    describe('startEditUser() method', () => {
        const updates = { name: 'new name' };

        it('should call dispatch with editUser', async () => {
            const editUserMock = jest.spyOn(userActionHelpers, 'editUser');

            await store.dispatch(startEditUser(updates));

            expect(store.getActions().length).toBe(1);
            expect(editUserMock).toHaveBeenCalledWith(updates);
        });

        it(`should call update with updates`, async () => {
            await store.dispatch(startEditUser(updates));

            expect(update).toHaveBeenLastCalledWith(updates);
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startEditUser(updates));

            expect(database.ref).toHaveBeenLastCalledWith(`users/${userId}`);
        });
    });

    describe('startClearUser() method', () => {
        it('should call dispatch with clearUser', () => {
            const clearUserMock = jest.spyOn(userActionHelpers, 'editUser');

            store.dispatch(startClearUser());

            expect(store.getActions().length).toBe(1);
            expect(clearUserMock).toHaveBeenCalled();
        })
    })
})
