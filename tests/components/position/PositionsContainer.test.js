import React from 'react';
import { shallow } from 'enzyme';
import { PositionsContainer } from 'Position/PositionsContainer';
import positions from '../../fixtures/positions';

describe('PositionsContainer', () => {
    let wrapper;

    const buildWrapper = (positionsInput = [], filters = { text: '' }) => {
        wrapper = shallow(
            <PositionsContainer
                filters={filters}
                positions={positionsInput}
            />
        );
    };

    it('should render PositionsContainer correctly', () => {
        buildWrapper(positions);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsContainer correctly when text filter is applied', () => {
        const [{ jobId }] = positions;
        buildWrapper(positions, { text: jobId });

        expect(wrapper).toMatchSnapshot();
    });
});
