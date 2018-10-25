import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchAddWidget } from 'PositionWatch/PositionWatchAddWidget';
import { positionsWatchedStore } from '../../fixtures/positionsWatched';

describe('PositionWatchAddWidget', () => {
    const [positionWatched] = positionsWatchedStore;
    const { positionId } = positionWatched;
    const startAddPositionWatch = jest.fn();
    const startRemovePositionWatch = jest.fn();
    const startSetPositionWatchLevel = jest.fn();
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <PositionWatchAddWidget
                positionId={positionId}
                startAddPositionWatch={startAddPositionWatch}
                startRemovePositionWatch={startRemovePositionWatch}
                startSetPositionWatchLevel={startSetPositionWatchLevel}
            />
        );
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('should render PositionWatchAddWidget correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should set the notificationLevel correctly on construction', () => {
        expect(wrapper.find('select').prop('value')).toEqual('NONE');
    });

    describe('when the notification select input is changed', () => {
        describe('when the current notification level is NONE', () => {
            const newNotificationLevel = 'ALL';
            const event = { target: { value: newNotificationLevel } };

            it('should call startAddPositionWatch with positionId and new notification level', () => {
                wrapper.find('select').simulate('change', event);

                expect(startAddPositionWatch).toHaveBeenLastCalledWith(positionId, newNotificationLevel);
            });

            it('should set the new notification level correctly in the select input', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.find('select').prop('value')).toEqual(newNotificationLevel);
            });

            it('should set the new notification level correctly in the state', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.state('notificationLevel')).toEqual(newNotificationLevel);
            });
        });

        describe('when the notification level is changed to NONE', () => {
            const newNotificationLevel = 'NONE';
            const event = { target: { value: newNotificationLevel } };

            beforeEach(() => {
                wrapper.setState({ notificationLevel: 'ALL' });
                expect(wrapper.find('select').prop('value')).toEqual('ALL');
            });

            it('should call startRemovePositionWatch with positionId', () => {
                wrapper.find('select').simulate('change', event);

                expect(startRemovePositionWatch).toHaveBeenLastCalledWith(positionId);
            });

            it('should set the new notification level correctly in the select input', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.find('select').prop('value')).toEqual(newNotificationLevel);
            });

            it('should set the new notification level correctly in the state', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.state('notificationLevel')).toEqual(newNotificationLevel);
            });
        });

        describe('when the notification level is changed to something other than NONE', () => {
            const newNotificationLevel = 'SOME';
            const event = { target: { value: newNotificationLevel } };

            beforeEach(() => {
                wrapper.setState({ notificationLevel: 'ALL' });
                expect(wrapper.find('select').prop('value')).toEqual('ALL');
            });

            it('should call startSetPositionWatchLevel with positionId and new notification level', () => {
                wrapper.find('select').simulate('change', event);

                expect(startSetPositionWatchLevel).toHaveBeenLastCalledWith(positionId, newNotificationLevel);
            });

            it('should set the new notification level correctly in the select input', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.find('select').prop('value')).toEqual(newNotificationLevel);
            });

            it('should set the new notification level correctly in the state', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.state('notificationLevel')).toEqual(newNotificationLevel);
            });
        });
    });
});
