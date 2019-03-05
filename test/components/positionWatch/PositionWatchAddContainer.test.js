import React from 'react';
import { shallow } from 'enzyme';
import { PositionsWatchAddContainer } from 'PositionWatch/PositionsWatchAddContainer';
import positionsWatched from '../../fixtures/positionsWatched';
import positions, { positionId } from '../../fixtures/positions';

describe('PositionsWatchAddContainer', () => {
    let wrapper;

    const buildWrapper = (positionsWatchedInput = [], positionIdInput) => {
        wrapper = shallow(
            <PositionsWatchAddContainer
                positionId={positionIdInput}
                positions={positions}
                positionsWatched={positionsWatchedInput}
            />
        );
    };

    describe('when positionId is available', () => {
        describe('when all positions are watched', () => {
            it('should render PositionsWatchAddContainer correctly', () => {
                buildWrapper(positionsWatched, positionId);

                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when some positions are watched', () => {
            it('should render PositionsWatchAddContainer correctly', () => {
                const [positionWatched] = positionsWatched;

                buildWrapper([positionWatched], positionId);

                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when NO positions are watched', () => {
            it('should render PositionsWatchAddContainer correctly', () => {
                buildWrapper(undefined, positionId);

                expect(wrapper).toMatchSnapshot();
            });
        });
    });

    describe('when positionId is NOT available', () => {
        it('should render PositionsWatchAddContainer correctly', () => {
            buildWrapper(positionsWatched, undefined);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
