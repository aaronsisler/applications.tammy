import React from 'react';
import { shallow } from 'enzyme';
import NotificationsIcon from 'Notification/NotificationsIcon';

describe('NotificationsIcon', () => {
    let wrapper;

    const buildWrapper = (unreadNotificationsCountInput = 0) => {
        wrapper = shallow(
            <NotificationsIcon
                unreadNotificationsCount={unreadNotificationsCountInput}
            />);
    }

    it('should render NotificationsIcon correctly when unread notifications count is NOT zero', () => {
        buildWrapper(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render NotificationsIcon correctly when unread notifications count is zero', () => {
        buildWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
