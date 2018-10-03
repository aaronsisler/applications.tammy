import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../src/firebase/firebase';
import { startSetUser, startEditUser, startClearUser, } from '../../src/actions/user';
import * as userActionHelpers from 'Actions/helpers/user';
import { defaultAuthState } from '../fixtures/auth';
import userFixture from '../fixtures/user';

const createMockStore = configureMockStore([thunk]);

describe('User Actions', () => {
    const userId = defaultAuthState.auth.uid;
    const user = { ...userFixture, userId };

    beforeEach(() => {
        const once = jest.fn();
        const update = jest.fn();
        const val = () => ({ ...user });
        once.mockResolvedValue({ key: userId, val });
        update.mockResolvedValue();
        jest.spyOn(database, 'ref').mockReturnValue({ update, once });
    })

    afterEach(() => {
        database.ref.mockRestore();
    })


    describe('startSetUser() method', () => {
        it('should call dispatch with setUser', async () => {
            const setUserMock = jest.spyOn(userActionHelpers, 'setUser');
            const store = createMockStore(defaultAuthState);

            await store.dispatch(startSetUser());

            expect(store.getActions().length).toBe(1);
            expect(setUserMock).toHaveBeenCalledWith(user);
        })
    })

    describe('startEditUser() method', () => {
        it('should call dispatch with editUser', async () => {
            const updates = { name: 'new name' };
            const editUserMock = jest.spyOn(userActionHelpers, 'editUser');
            const store = createMockStore(defaultAuthState);

            await store.dispatch(startEditUser(updates));

            expect(store.getActions().length).toBe(1);
            expect(editUserMock).toHaveBeenCalledWith(updates);
        })
    })

    describe('startClearUser() method', () => {
        it('should call dispatch with clearUser', () => {
            const clearUserMock = jest.spyOn(userActionHelpers, 'editUser');
            const store = createMockStore();

            store.dispatch(startClearUser());

            expect(store.getActions().length).toBe(1);
            expect(clearUserMock).toHaveBeenCalled();
        })
    })
})
