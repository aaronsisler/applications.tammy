import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from 'Firebase/firebase';
import { startStreamNotifications } from 'Actions/notifications';
import * as notificationsActionHelpers from 'Actions/helpers/notifications';
import { defaultAuthState } from '../fixtures/auth';
import notifications from '../fixtures/notifications';

const createMockStore = configureMockStore([thunk]);

describe('Notifications Actions', () => {
    const store = createMockStore(defaultAuthState);
    const userId = defaultAuthState.auth.uid;
    let on;
    const notificationsMock = [];
    notifications.forEach((notification) => {
        const val = () => ({ ...notification });
        notificationsMock.push({ key: notification.notificationId, val });
    });

    beforeEach(() => {
        on = jest.fn();
        jest.spyOn(database, 'ref').mockReturnValue({ on });
    });

    afterEach(() => {
        database.ref.mockRestore();
    });

    describe('startStreamNotifications() method', () => {
        it(`should call dispatch with setNotifications from 'on' callback method`, async () => {
            const setNotificationsMock = jest.spyOn(notificationsActionHelpers, 'setNotifications');

            await store.dispatch(startStreamNotifications(notifications));

            const [[, subFunction]] = on.mock.calls;
            await subFunction(notificationsMock);

            expect(store.getActions().length).toBe(1);
            expect(setNotificationsMock).toHaveBeenCalledWith(notifications);
        });

        it(`should call on with string 'value' and a callback function`, async () => {
            await store.dispatch(startStreamNotifications(notifications));

            expect(on).toHaveBeenLastCalledWith('value', expect.any(Function));
        });

        it(`should call database ref with specific path`, async () => {
            await store.dispatch(startStreamNotifications(notifications));

            expect(database.ref).toHaveBeenLastCalledWith(`notifications/${userId}`);
        });
    });
});
