import notificationsReducer from 'Reducers/notifications';
import { setNotifications } from 'Actions/helpers/notifications';
import notifications from '../fixtures/notifications';

const defaultState = [];

describe('notifications reducer', () => {
    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        };

        const state = notificationsReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the notifications', () => {
        const action = setNotifications(notifications);

        const state = notificationsReducer(undefined, action);

        expect(state).toEqual(notifications);
    });
})
