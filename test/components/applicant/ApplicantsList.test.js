import React from 'react';
import { shallow } from 'enzyme';
import ApplicantsList from 'Applicant/ApplicantsList';
import applicants from '../../fixtures/applicants';
import { positionId } from '../../fixtures/positions';

describe('ApplicantsList', () => {
    let wrapper;

    const buildWrapper = (applicantsInput = []) => {
        wrapper = shallow(
            <ApplicantsList
                applicants={applicantsInput}
                positionId={positionId}
            />);
    }

    it('should render ApplicantsList correctly when applicants are available', () => {
        buildWrapper(applicants);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render ApplicantsList correctly when no applicants are available', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
