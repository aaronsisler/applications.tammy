import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsListItem } from 'Notification/NotificationsListItem';

describe('NotificationsListItem', () => {
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <NotificationsListItem
                notificationMessage={'I am a notification message'}
            />);
    }

    it('should render NotificationsIcon correctly', () => {
        buildWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
