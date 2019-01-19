import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantsContainer } from 'Applicant/ApplicantsContainer';
import applicants from '../../fixtures/applicants';

describe('ApplicantsContainer', () => {
    let wrapper;
    const startSetApplicants = jest.fn();

    const buildWrapper = () => {
        wrapper = shallow(
            <ApplicantsContainer
                applicants={applicants}
                startSetApplicants={startSetApplicants}
            />
        );
    };

    it('should render ApplicantsContainer correctly', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });

    xit('should call startSetApplicants on construction', () => {
        buildWrapper();

        expect(startSetApplicants).toHaveBeenCalled();
    });
});
