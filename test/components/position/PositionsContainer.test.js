import React from 'react';
import { shallow } from 'enzyme';
import { PositionsContainer } from 'Position/PositionsContainer';
import positions from '../../fixtures/positions';

describe('PositionsContainer', () => {
    let wrapper;

    const buildWrapper = (positionsInput = [], positionInput = {}, filters = { text: '' }) => {
        wrapper = shallow(
            <PositionsContainer
                filters={filters}
                position={positionInput}
                positions={positionsInput}
            />
        );
    };

    it('should render PositionsContainer correctly when a position is selected', () => {
        const [position] = positions;
        buildWrapper(positions, position);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsContainer correctly when a position is NOT selected', () => {
        buildWrapper(positions);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsContainer correctly when text filter is applied', () => {
        const [{ jobId }] = positions;
        buildWrapper(positions, undefined, { text: jobId });

        expect(wrapper).toMatchSnapshot();
    });
});
