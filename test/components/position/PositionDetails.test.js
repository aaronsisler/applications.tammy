import React from 'react';
import { shallow } from 'enzyme';
import { PositionDetails } from 'Position/PositionDetails';
import positions from '../../fixtures/positions';

describe('PositionDetails', () => {
    it('should render PositionDetails correctly when position is available', () => {
        const [position] = positions;
        const wrapper = shallow(
            <PositionDetails
                position={position}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionDetails correctly when position is NOT available', () => {
        const wrapper = shallow(
            <PositionDetails
                position={undefined}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
