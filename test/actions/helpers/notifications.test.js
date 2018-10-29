import { setNotifications } from 'Actions/helpers/notifications';
import notifications from '../../fixtures/notifications';

describe('Notifications Action Helpers', () => {
    describe('setNotifications() method', () => {
        it(`should setup 'set notifications' action object`, () => {
            const action = setNotifications(notifications);

            expect(action).toEqual({
                type: 'SET_NOTIFICATIONS',
                notifications
            })
        })
    })
})
