import { clearApplication } from 'Actions/helpers/application';

describe('Application Action Helpers', () => {
    describe('clearApplication() method', () => {
        it(`should setup 'clear application' action object`, () => {
            const action = clearApplication();

            expect(action).toEqual({
                type: 'CLEAR_APPLICATION',
            })
        })
    })
})
