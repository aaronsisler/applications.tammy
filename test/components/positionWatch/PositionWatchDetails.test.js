import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchDetails } from 'PositionWatch/PositionWatchDetails';
import positions from '../../fixtures/positions';

describe('PositionWatchDetails', () => {
    it('should render PositionWatchDetails correctly when position is available', () => {
        const [position] = positions;
        const wrapper = shallow(
            <PositionWatchDetails
                position={position}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionWatchDetails correctly when position is NOT available', () => {
        const wrapper = shallow(
            <PositionWatchDetails
                position={undefined}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
