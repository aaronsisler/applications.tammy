import React from 'react';
import { shallow } from 'enzyme';
import { PositionsListItem } from 'Shared/position/PositionsListItem';
import positions from '../../../fixtures/positions';

describe('PositionsListItem', () => {
    const startSetPosition = jest.fn();
    const [position] = positions;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PositionsListItem
                {...position}
                startSetPosition={startSetPosition}
            />);
    });

    it('should render PositionsListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
