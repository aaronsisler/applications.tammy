import React from 'react';
import { shallow } from 'enzyme';
import ApplicantsPage from 'Applicant/ApplicantsPage';

describe('ApplicantsPage', () => {
    it('should render PositionsPage correctly', () => {
        const wrapper = shallow(<ApplicantsPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
