import React from 'react';
import { shallow } from 'enzyme';
import { PositionsWatchContainer } from 'PositionWatch/PositionsWatchContainer';
import positionsWatched from '../../fixtures/positionsWatched';
import { positionId } from '../../fixtures/positions';

describe('PositionsWatchContainer', () => {
    let wrapper;

    const buildWrapper = (positionIdInput = undefined) => {
        wrapper = shallow(
            <PositionsWatchContainer
                positionId={positionIdInput}
                positionsWatched={positionsWatched}
            />
        );
    };

    describe('when positionId is available', () => {
        beforeEach(() => {
            buildWrapper(positionId);
        });

        it('should render PositionsWatchContainer correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when positionId is NOT available', () => {
        it('should render PositionsWatchContainer correctly', () => {
            buildWrapper();

            expect(wrapper).toMatchSnapshot();
        });
    });
});
