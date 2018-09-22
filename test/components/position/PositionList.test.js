import React from 'react';
import { shallow } from 'enzyme';
import PositionList from 'Position/PositionList';
import positions from '../../fixtures/positions';

describe('PositionList', () => {
    let wrapper;

    const buildWrapper = (positionsInput = []) => {
        wrapper = shallow(
            <PositionList
                positions={positionsInput}
            />);
    }

    it('should render PositionList correctly when positions available', () => {
        buildWrapper(positions);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render PositionList correctly no positions available', () => {
        buildWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
