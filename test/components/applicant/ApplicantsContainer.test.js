import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantsContainer } from 'Applicant/ApplicantsContainer';
import applicants from '../../fixtures/applicants';

describe('ApplicantsContainer', () => {
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <ApplicantsContainer
                applicants={applicants}
            />
        );
    };

    it('should render ApplicantsContainer correctly', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
