import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../../src/components/core/DashboardPage';

describe('DashboardPage', () => {
    it('should render DashboardPage correctly', () => {
        const wrapper = shallow(<DashboardPage />)
        expect(wrapper).toMatchSnapshot();
    })
})
