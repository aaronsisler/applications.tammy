import React from 'react';
import { shallow } from 'enzyme';
import PositionsPage from 'Position/PositionsPage';

describe('PositionsPage', () => {
    it('should render PositionsPage correctly', () => {
        const wrapper = shallow(<PositionsPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
