import React from 'react';
import { shallow } from 'enzyme';
import { PositionsListItem } from 'Position/PositionsListItem';
import positions from '../../fixtures/positions';

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

    it('should call startSetPosition prop when clicked', () => {
        wrapper.find('.positions_list_item').simulate('click');

        expect(startSetPosition).toHaveBeenLastCalledWith(position.positionId);
    })
});
