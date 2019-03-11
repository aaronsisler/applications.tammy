import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchAddWidget } from 'PositionWatch/PositionWatchAddWidget';
import positionsWatched from '../../fixtures/positionsWatched';

describe('PositionWatchAddWidget', () => {
    const [positionWatched] = positionsWatched;
    const { positionId } = positionWatched;
    const startAddPositionWatch = jest.fn();
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <PositionWatchAddWidget
                positionId={positionId}
                startAddPositionWatch={startAddPositionWatch}
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
        const newNotificationLevel = 'ALL';
        const event = { target: { value: newNotificationLevel } };

        it('should call startAddPositionWatch with positionId and new notification level', () => {
            wrapper.find('select').simulate('change', event);

            expect(startAddPositionWatch).toHaveBeenLastCalledWith(positionId, newNotificationLevel);
        });
    });
});
