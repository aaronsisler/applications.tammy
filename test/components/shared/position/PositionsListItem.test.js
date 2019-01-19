import React from 'react';
import { shallow } from 'enzyme';
import { PositionsListItem, mapDispatchToProps } from 'Shared/position/PositionsListItem';
import positions from '../../../fixtures/positions';

import * as positionActions from 'Actions/position';

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

        expect(startSetPosition).toHaveBeenCalled();
    });

    describe('mapDispatchToProps', () => {
        it('should call startSetPosition with positionId', () => {
            const startSetPositionMock = jest.spyOn(positionActions, 'startSetPosition');
            const dispatch = jest.fn();
            const { positionId } = position;

            mapDispatchToProps(dispatch, { positionId }).startSetPosition();

            expect(startSetPositionMock).toHaveBeenLastCalledWith(positionId);
        });
    });
});
