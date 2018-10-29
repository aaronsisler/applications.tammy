import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from 'Notification/NotificationsContainer';
import notifications from '../../fixtures/notifications';

describe('NotificationsContainer', () => {
    const startStreamNotifications = jest.fn();
    let wrapper;

    const buildWrapper = (notificationsInput = []) => {
        wrapper = shallow(
            <NotificationsContainer
                notifications={notificationsInput}
                startStreamNotifications={startStreamNotifications}
            />
        );
    };

    beforeEach(() => {
        buildWrapper(notifications);
    });

    describe('when is being constructed', () => {
        it('should set isListToggledOpenrender to false', () => {
            expect(wrapper.state('isListToggledOpen')).toBe(false);
        });

        it('should call startStreamNotifications', () => {
            expect(startStreamNotifications).toHaveBeenCalled();
        });
    });

    describe('when list is currently toggled closed', () => {
        it('should render NotificationsContainer correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('when list is toggled to open', () => {
            it('should set the isListToggledOpen to false', () => {
                wrapper.find('.notifications_container__wrapper').simulate('click');

                expect(wrapper.state('isListToggledOpen')).toBe(true);
            });
        });
    });

    describe('when list is currently toggled open', () => {
        beforeEach(() => {
            wrapper.setState({ isListToggledOpen: true });
        });

        it('should render NotificationsContainer correctly', () => {
            wrapper.find('.notifications_container__wrapper').simulate('click');

            expect(wrapper).toMatchSnapshot();
        });

        describe('when list is toggled to close', () => {
            it('should set the isListToggledOpen to false', () => {
                wrapper.find('.notifications_container__wrapper').simulate('click');

                expect(wrapper.state('isListToggledOpen')).toBe(false);
            });
        });
    });
});
