import React from 'react';
import { shallow } from 'enzyme';
import PositionsWatchAddPage from 'PositionWatch/PositionsWatchAddPage';

describe('PositionsWatchAddPage', () => {
    it('should render PositionsWatchAddPage correctly', () => {
        const wrapper = shallow(<PositionsWatchAddPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
