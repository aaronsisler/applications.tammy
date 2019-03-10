import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationReviewContainer } from 'Application/ApplicationReviewContainer';
import { positionId } from '../../fixtures/positions';
import userDocuments from '../../fixtures/userDocuments';

describe('ApplicationReviewContainer', () => {
    let wrapper;
    const startDecrementCurrentStep = jest.fn();
    const startIncrementCurrentStep = jest.fn();
    const startSubmitApplication = jest.fn();

    const buildWrapper = (applicationUserDocuments, userDocumentsInput) => {
        wrapper = shallow(
            <ApplicationReviewContainer
                applicationUserDocuments={applicationUserDocuments}
                positionId={positionId}
                startDecrementCurrentStep={startDecrementCurrentStep}
                startIncrementCurrentStep={startIncrementCurrentStep}
                startSubmitApplication={startSubmitApplication}
                userDocuments={userDocumentsInput}
            />
        );
    };

    beforeEach(() => {
        buildWrapper(userDocuments, userDocuments);
    });

    it('should render ApplicationReviewContainer correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('when ApplicationProgressButtonsWidget handleDecrementStep prop is called', () => {
        beforeEach(() => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleDecrementStep')();
        });

        it('should call startDecrementCurrentStep', () => {
            expect(startDecrementCurrentStep).toHaveBeenCalled();
        });
    });

    describe('when ApplicationProgressButtonsWidget handleIncrementStep prop is called', () => {
        beforeEach(() => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleIncrementStep')();
        });

        it('should call startSubmitApplication', () => {
            expect(startSubmitApplication).toHaveBeenLastCalledWith(positionId);
        });

        it('should call startIncrementCurrentStep', () => {
            expect(startIncrementCurrentStep).toHaveBeenCalled();
        });
    });
});
