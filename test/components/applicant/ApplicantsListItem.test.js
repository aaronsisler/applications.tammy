import React from 'react';
import { shallow } from 'enzyme';
import ApplicantsListItem from 'Applicant/ApplicantsListItem';
import { applicantId, applicant } from '../../fixtures/applicants';
import { positionId } from '../../fixtures/positions';

import history from 'Tools/history';
jest.mock('Tools/history');

describe('ApplicantsListItem', () => {
    let wrapper;
    const push = jest.fn();
    const { displayName, firstName, lastName } = applicant.user;

    const buildWrapper = () => shallow(
        <ApplicantsListItem
            applicantId={applicant.applicantId}
            displayName={displayName}
            firstName={firstName}
            lastName={lastName}
            positionId={positionId}
        />);

    beforeEach(() => {
        history.push = push;
        wrapper = buildWrapper();
    });

    it('should render ApplicantsListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should navigate to correct route on click', () => {
        wrapper.find('.applicants_list_item').simulate('click');

        expect(push).toHaveBeenLastCalledWith(`/applicants/${positionId}/${applicantId}`);
    });
});
