import { clearApplication, setApplicationUser } from 'Actions/helpers/application';
import { user } from '../../fixtures/user';

describe('Application Action Helpers', () => {
    describe('clearApplication() method', () => {
        it(`should setup 'clear application' action object`, () => {
            const action = clearApplication();

            expect(action).toEqual({
                type: 'CLEAR_APPLICATION',
            });
        });
    });

    describe('setApplicationUser() method', () => {
        it(`should setup 'set application user' action object`, () => {
            const action = setApplicationUser(user);

            expect(action).toEqual({
                type: 'SET_APPLICATION_USER',
                user
            });
        });
    });
});
