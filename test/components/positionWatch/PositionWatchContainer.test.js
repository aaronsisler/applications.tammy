import React from 'react';
import { shallow } from 'enzyme';
import { PositionsWatchContainer } from 'PositionWatch/PositionsWatchContainer';
import { positionsWatchedStore } from '../../fixtures/positionsWatched';
import positions from '../../fixtures/positions';

describe('PositionsWatchContainer', () => {
    const startClearPosition = jest.fn();
    let wrapper;
    const [position] = positions;

    const buildWrapper = (positionsWatchedInput = []) => {
        wrapper = shallow(
            <PositionsWatchContainer
                positions={positions}
                positionsWatched={positionsWatchedInput}
                startClearPosition={startClearPosition}
            />
        );
    };

    it('should render PositionsWatchContainer correctly when positions are watched', () => {
        buildWrapper(positionsWatchedStore);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchContainer correctly when NO positions are watched', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchContainer correctly when positions watched is not in positions list', () => {
        const newPositionWatched = { ...position, positionId: 'mockNewPositionId', notificationLevel: 'REQUIRED' };
        buildWrapper([...positionsWatchedStore, newPositionWatched]);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call startClearPosition on unmount', () => {
        buildWrapper();

        wrapper.unmount();

        expect(startClearPosition).toHaveBeenCalled();
    });
});
