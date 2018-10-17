import React from 'react';
import { shallow } from 'enzyme';
import ApplicationPage from 'Application/ApplicationPage';

describe('ApplicationPage', () => {
    it('should render ApplicationPage correctly', () => {
        const wrapper = shallow(<ApplicationPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
