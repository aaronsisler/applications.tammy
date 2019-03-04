import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantDetails } from 'Applicant/ApplicantDetails';
import { applicant, applicantId } from '../../fixtures/applicants';
import { positionId } from '../../fixtures/positions';

import history from 'Tools/history';
jest.mock('Tools/history');

const buildWrapper = (applicantInput) => shallow(
    <ApplicantDetails
        applicant={applicantInput}
        applicantId={applicantId}
        positionId={positionId}
    />
);

describe('ApplicantDetails', () => {
    let wrapper;
    const push = jest.fn();

    describe('when applicant is defined', () => {
        describe('when user contact info is provided', () => {
            beforeEach(() => {
                wrapper = buildWrapper(applicant);
            });

            it('should render ApplicantUserInfo correctly', () => {
                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when user contact info is NOT provided', () => {
            beforeEach(() => {
                const applicantWithoutContactInto = {
                    ...applicant,
                    user: {
                        ...applicant.user,
                        displayPhoneNumber: undefined,
                        email: undefined
                    }
                }
                wrapper = buildWrapper(applicantWithoutContactInto);
            });

            it('should render ApplicantUserInfo correctly', () => {
                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when button is clicked', () => {
            beforeEach(() => {
                history.push = push
                wrapper = buildWrapper(applicant);
            });

            it('should navigate to correct route', () => {
                wrapper.find('button').simulate('click');

                expect(push).toHaveBeenLastCalledWith(`/applicants/${positionId}`);
            });
        });
    });

    describe('when applicant is undefined', () => {
        beforeEach(() => {
            wrapper = shallow(
                <ApplicantDetails
                    positionId={positionId}
                />
            );
        });

        it('should render ApplicantUserInfo correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
