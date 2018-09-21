import React from 'react';
import { shallow } from 'enzyme';
import { PositionListItem } from 'Position/PositionListItem';
import positions from '../../fixtures/positions';

describe('PositionListItem', () => {
    const startSetPosition = jest.fn();
    const [position] = positions;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PositionListItem
                {...position}
                startSetPosition={startSetPosition}
            />);
    });

    it('should render PositionListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call startSetPosition prop when clicked', () => {
        wrapper.find('.position_list_item').simulate('click');

        expect(startSetPosition).toHaveBeenLastCalledWith(position.positionId);
    })
});
