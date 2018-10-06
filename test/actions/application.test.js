import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { startClearApplication, } from 'Actions/application';
import * as applicationActionHelpers from 'Actions/helpers/application';

const createMockStore = configureMockStore([thunk]);

describe('Application Actions', () => {
    describe('startClearApplication() method', () => {
        it(`should call dispatch with clearApplication`, async () => {
            const clearApplicationMock = jest.spyOn(applicationActionHelpers, 'clearApplication');
            const store = createMockStore();

            await store.dispatch(startClearApplication());

            expect(store.getActions().length).toBe(1);
            expect(clearApplicationMock).toHaveBeenCalled();
        })
    })
})
