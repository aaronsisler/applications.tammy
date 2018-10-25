import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchAddWidget } from 'PositionWatch/PositionWatchAddWidget';
import { positionsWatchedStore } from '../../fixtures/positionsWatched';

describe('PositionWatchAddWidget', () => {
    const [positionWatched] = positionsWatchedStore;
    const { positionId } = positionWatched;
    const startAddSubscription = jest.fn();
    const startRemoveSubscription = jest.fn();
    const startSetSubscriptionLevel = jest.fn();
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <PositionWatchAddWidget
                positionId={positionId}
                startAddSubscription={startAddSubscription}
                startRemoveSubscription={startRemoveSubscription}
                startSetSubscriptionLevel={startSetSubscriptionLevel}
            />
        );
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('should render PositionWatchAddWidget correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should set the subscriptionLevel correctly on construction', () => {
        expect(wrapper.find('select').prop('value')).toEqual('NONE');
    });

    describe('when the subscription select input is changed', () => {
        describe('when the current subscription level is NONE', () => {
            const newSubscriptionLevel = 'ALL';
            const event = { target: { value: newSubscriptionLevel } };

            it('should call startAddSubscription with positionId and new subscription level', () => {
                wrapper.find('select').simulate('change', event);

                expect(startAddSubscription).toHaveBeenLastCalledWith(positionId, newSubscriptionLevel);
            });

            it('should set the new subscription level correctly in the select input', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.find('select').prop('value')).toEqual(newSubscriptionLevel);
            });

            it('should set the new subscription level correctly in the state', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.state('subscriptionLevel')).toEqual(newSubscriptionLevel);
            });
        });

        describe('when the subscription level is changed to NONE', () => {
            const newSubscriptionLevel = 'NONE';
            const event = { target: { value: newSubscriptionLevel } };

            beforeEach(() => {
                wrapper.setState({ subscriptionLevel: 'ALL' });
                expect(wrapper.find('select').prop('value')).toEqual('ALL');
            });

            it('should call startRemoveSubscription with positionId', () => {
                wrapper.find('select').simulate('change', event);

                expect(startRemoveSubscription).toHaveBeenLastCalledWith(positionId);
            });

            it('should set the new subscription level correctly in the select input', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.find('select').prop('value')).toEqual(newSubscriptionLevel);
            });

            it('should set the new subscription level correctly in the state', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.state('subscriptionLevel')).toEqual(newSubscriptionLevel);
            });
        });

        describe('when the subscription level is changed to something other than NONE', () => {
            const newSubscriptionLevel = 'SOME';
            const event = { target: { value: newSubscriptionLevel } };

            beforeEach(() => {
                wrapper.setState({ subscriptionLevel: 'ALL' });
                expect(wrapper.find('select').prop('value')).toEqual('ALL');
            });

            it('should call startSetSubscriptionLevel with positionId and new subscription level', () => {
                wrapper.find('select').simulate('change', event);

                expect(startSetSubscriptionLevel).toHaveBeenLastCalledWith(positionId, newSubscriptionLevel);
            });

            it('should set the new subscription level correctly in the select input', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.find('select').prop('value')).toEqual(newSubscriptionLevel);
            });

            it('should set the new subscription level correctly in the state', () => {
                wrapper.find('select').simulate('change', event);

                expect(wrapper.state('subscriptionLevel')).toEqual(newSubscriptionLevel);
            });
        });
    });
});
