import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchAddDetails } from 'PositionWatch/PositionWatchAddDetails';
import positions from '../../fixtures/positions';

describe('PositionWatchAddDetails', () => {
    it('should render PositionWatchAddDetails correctly when position is available', () => {
        const [position] = positions;
        const wrapper = shallow(
            <PositionWatchAddDetails
                position={position}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionWatchAddDetails correctly when position is NOT available', () => {
        const wrapper = shallow(
            <PositionWatchAddDetails
                position={undefined}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
