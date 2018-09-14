import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from 'Core/DashboardPage';

describe('DashboardPage', () => {
    it('should render DashboardPage correctly', () => {
        const wrapper = shallow(<DashboardPage />)
        expect(wrapper).toMatchSnapshot();
    })
})
