import React from 'react';
import { shallow } from 'enzyme';
import { PositionsWatchContainer } from 'PositionWatch/PositionsWatchContainer';
import positionsWatched from '../../fixtures/positionsWatched';
import positions from '../../fixtures/positions';

describe('PositionsWatchContainer', () => {
    const startClearPosition = jest.fn();
    const startSetPositionsWatched = jest.fn();
    let wrapper;

    const buildWrapper = (positionsWatchedInput = []) => {
        wrapper = shallow(
            <PositionsWatchContainer
                positions={positions}
                positionsWatched={positionsWatchedInput}
                startClearPosition={startClearPosition}
                startSetPositionsWatched={startSetPositionsWatched}
            />
        );
    };

    it('should render PositionsWatchContainer correctly when positions are watched', () => {
        buildWrapper(positionsWatched);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchContainer correctly when NO positions are watched', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchContainer correctly when positions watched is not in positions list', () => {
        const newPositionWatched = { positionId: 'mockNewPositionId', subscriptionLevel: 'REQUIRED' };
        buildWrapper([...positionsWatched, newPositionWatched]);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call startSetPositionsWatched on construction', () => {
        buildWrapper();

        expect(startSetPositionsWatched).toHaveBeenCalled();
    });

    it('should call startClearPosition on unmount', () => {
        buildWrapper();

        wrapper.unmount();

        expect(startClearPosition).toHaveBeenCalled();
    });
});
