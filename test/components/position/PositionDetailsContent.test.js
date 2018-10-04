import React from 'react';
import { shallow } from 'enzyme';
import PositionDetailsContent from 'Position/PositionDetailsContent';
import positions from '../../fixtures/positions';

describe('PositionList', () => {
    it('should render PositionDetailsContent correctly', () => {
        const [position] = positions;
        const wrapper = shallow(
            <PositionDetailsContent
                position={position}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
