import React from 'react';
import { shallow } from 'enzyme';
import ApplicantDetailsContent from 'Applicant/ApplicantDetailsContent';
import { applicant } from '../../fixtures/applicants';

describe('ApplicantDetailsContent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ApplicantDetailsContent
                applicant={applicant}
            />
        );
    })

    it('should render ApplicantDetailsContent correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
