import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchEditWidget } from 'PositionWatch/PositionWatchEditWidget';
import { positionsWatchedStore } from '../../fixtures/positionsWatched';

describe('PositionWatchEditWidget', () => {
    const [positionWatched] = positionsWatchedStore;
    const { positionId, subscriptionLevel } = positionWatched;
    const startClearPosition = jest.fn();
    const startRemoveSubscription = jest.fn();
    const startSetSubscriptionLevel = jest.fn();
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <PositionWatchEditWidget
                positionId={positionId}
                positionsWatched={[positionWatched]}
                startClearPosition={startClearPosition}
                startRemoveSubscription={startRemoveSubscription}
                startSetSubscriptionLevel={startSetSubscriptionLevel}
            />
        );
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('should render PositionWatchEditWidget correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should set the subscriptionLevel correctly on construction', () => {
        expect(wrapper.find('select').prop('value')).toEqual(subscriptionLevel);
    });

    describe('when the subscription select input is changed', () => {
        it('should call startSetSubscriptionLevel with positionId and new subscription level', () => {
            const newSubscriptionLevel = 'SOME';
            const event = { target: { value: newSubscriptionLevel } };

            wrapper.find('select').simulate('change', event);

            expect(startSetSubscriptionLevel).toHaveBeenLastCalledWith(positionId, newSubscriptionLevel);
        });

        it('should set the new subscription level correctly', () => {
            const newSubscriptionLevel = 'SOME';
            expect(wrapper.find('select').prop('value')).toEqual(subscriptionLevel);

            wrapper.setProps({ positionsWatched: [{ positionId, subscriptionLevel: newSubscriptionLevel }] });

            expect(wrapper.find('select').prop('value')).toEqual(newSubscriptionLevel);
        });
    });

    describe('when the remove subscription button is clicked', () => {
        it('should call startRemoveSubscription with positionId', () => {
            wrapper.find('button').simulate('click');

            expect(startRemoveSubscription).toHaveBeenLastCalledWith(positionId);
        });

        it('should call startClearPosition', () => {
            wrapper.find('button').simulate('click');

            expect(startClearPosition).toHaveBeenCalled();
        });
    });
});
