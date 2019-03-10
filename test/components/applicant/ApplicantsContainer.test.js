import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantsContainer } from 'Applicant/ApplicantsContainer';
import applicants, { applicantId } from '../../fixtures/applicants';
import { position, positionId } from '../../fixtures/positions';
import history from 'Tools/history';
jest.mock('Tools/history');

describe('ApplicantsContainer', () => {
    let wrapper;
    const push = jest.fn();
    const startClearApplicants = jest.fn();
    const startSetApplicants = jest.fn();

    const buildWrapper = (positionIdInput, positionInput, applicantIdInput) => {
        wrapper = shallow(
            <ApplicantsContainer
                applicantId={applicantIdInput}
                applicants={applicants}
                positionId={positionIdInput}
                position={positionInput}
                startClearApplicants={startClearApplicants}
                startSetApplicants={startSetApplicants}
            />
        );
    };

    it('should call startClearApplicants on unmount', () => {
        buildWrapper(positionId, position, undefined);

        wrapper.unmount();

        expect(startClearApplicants).toHaveBeenCalled();
    });

    describe('when position is found', () => {
        it('should call startSetApplicants on mount', () => {
            buildWrapper(positionId, position, undefined);

            expect(startSetApplicants).toHaveBeenLastCalledWith(positionId);
        });

        describe('when applicantId is provided', () => {
            it('should render ApplicantsContainer correctly', () => {
                buildWrapper(positionId, position, applicantId);

                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when applicantId is NOT provided', () => {
            it('should render ApplicantsContainer correctly', () => {
                buildWrapper(positionId, position, undefined);

                expect(wrapper).toMatchSnapshot();
            });
        });
    });

    describe('when position is NOT found', () => {
        it('should call history.push with correct route', () => {
            history.push = push;
            buildWrapper(positionId, undefined, undefined);

            expect(push).toHaveBeenLastCalledWith(`/not_found`);
        })
    });
});
