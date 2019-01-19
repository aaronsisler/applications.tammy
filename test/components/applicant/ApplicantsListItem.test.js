import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantsListItem, mapDispatchToProps } from 'Applicant/ApplicantsListItem';
import applicants from '../../fixtures/applicants';

import * as applicantActions from 'Actions/applicant';

describe('ApplicantsListItem', () => {
    const startSetApplicant = jest.fn();
    const [applicant] = applicants;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ApplicantsListItem
                applicantId={applicant.applicantId}
                startSetApplicant={startSetApplicant}
                {...applicant.user}
            />);
    });

    it('should render ApplicantsListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call startSetApplicant prop when clicked', () => {
        wrapper.find('.applicants_list_item').simulate('click');

        expect(startSetApplicant).toHaveBeenCalled();
    });

    describe('mapDispatchToProps', () => {
        it('should call startSetApplicant with applicantId', () => {
            const startSetApplicantMock = jest.spyOn(applicantActions, 'startSetApplicant');
            const dispatch = jest.fn();
            const { applicantId } = applicant;

            mapDispatchToProps(dispatch, { applicantId }).startSetApplicant();

            expect(startSetApplicantMock).toHaveBeenLastCalledWith(applicantId);
        });
    });
});
