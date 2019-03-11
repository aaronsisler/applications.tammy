import React from 'react';
import { shallow } from 'enzyme';
import PositionsList from 'Shared/position/PositionsList';
import positions from '../../../fixtures/positions';

describe('PositionsList', () => {
    let wrapper;

    const buildWrapper = (positionsInput = []) => {
        wrapper = shallow(
            <PositionsList
                positions={positionsInput}
                linkRoute={'fakeRoute'}
            />);
    }

    it('should render PositionsList correctly when positions are available', () => {
        buildWrapper(positions);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionsList correctly when no positions are available', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
