import React from 'react';
import { shallow } from 'enzyme';
import { PositionsWatchAddContainer } from 'PositionWatch/PositionsWatchAddContainer';
import { positionsWatchedStore } from '../../fixtures/positionsWatched';
import positions from '../../fixtures/positions';

describe('PositionsWatchAddContainer', () => {
    const startClearPosition = jest.fn();
    let wrapper;
    const [position] = positions;

    const buildWrapper = (positionsWatchedInput = []) => {
        wrapper = shallow(
            <PositionsWatchAddContainer
                positions={positions}
                positionsWatched={positionsWatchedInput}
                startClearPosition={startClearPosition}
            />
        );
    };

    it('should render PositionsWatchAddContainer correctly when all positions are watched', () => {
        buildWrapper(positionsWatchedStore);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchAddContainer correctly when NO positions are watched', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchAddContainer correctly when only one position is being watched', () => {
        const [positionWatched] = positionsWatchedStore;

        buildWrapper([positionWatched]);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsWatchAddContainer correctly when positions watched is not in positions list', () => {
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
