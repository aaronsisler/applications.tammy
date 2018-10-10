import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { startClearApplication, startSetApplicationUser } from 'Actions/application';
import * as applicationActionHelpers from 'Actions/helpers/application';
import { user } from '../fixtures/user';

const createMockStore = configureMockStore([thunk]);

describe('Application Actions', () => {
    describe('startClearApplication() method', () => {
        it(`should call dispatch with clearApplication`, async () => {
            const clearApplicationMock = jest.spyOn(applicationActionHelpers, 'clearApplication');
            const store = createMockStore();

            await store.dispatch(startClearApplication());

            expect(store.getActions().length).toBe(1);
            expect(clearApplicationMock).toHaveBeenCalled();
        });
    });

    describe('startSetApplicationUser() method', () => {
        it(`should call dispatch with setApplicationUser`, async () => {
            const setApplicationUserMock = jest.spyOn(applicationActionHelpers, 'setApplicationUser');
            const store = createMockStore({ user });

            await store.dispatch(startSetApplicationUser(user));

            expect(store.getActions().length).toBe(1);
            expect(setApplicationUserMock).toHaveBeenLastCalledWith(user);
        });
    });
});
