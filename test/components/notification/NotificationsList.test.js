import React from 'react';
import { shallow } from 'enzyme';
import NotificationsList from 'Notification/NotificationsList';
import notifications from '../../fixtures/notifications';

describe('NotificationsList', () => {
    let wrapper;

    const buildWrapper = (notificationsInput = []) => {
        wrapper = shallow(
            <NotificationsList
                notifications={notificationsInput}
            />);
    }

    it('should render NotificationsList correctly when notifications are available', () => {
        buildWrapper(notifications);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render NotificationsList correctly when no notifications are available', () => {
        buildWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
