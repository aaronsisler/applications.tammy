import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationReviewContainer } from 'Application/ApplicationReviewContainer';
import userDocuments from '../../fixtures/userDocuments';

describe('ApplicationReviewContainer', () => {
    let wrapper;
    const startClearPosition = jest.fn();
    const startDecrementCurrentStep = jest.fn();
    const startIncrementCurrentStep = jest.fn();
    const startSubmitApplication = jest.fn();

    const buildWrapper = (applicationUserDocuments, userDocumentsInput) => {
        wrapper = shallow(
            <ApplicationReviewContainer
                applicationUserDocuments={applicationUserDocuments}
                startClearPosition={startClearPosition}
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

    it('should set the isReadOnly prop to true on UserProfileContainer', () => {
        expect(wrapper.find('Connect(UserProfileContainer)').props().isReadOnly).toBe(true);
    })

    describe('when ApplicationProgressButtonsWidget handleDecrementStep prop is called', () => {
        it('should call startDecrementCurrentStep', () => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleDecrementStep')();
            expect(startDecrementCurrentStep).toHaveBeenCalled();
        });
    });

    describe('when ApplicationProgressButtonsWidget handleIncrementStep prop is called', () => {
        it('should call startClearPosition', () => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleIncrementStep')();
            expect(startClearPosition).toHaveBeenCalled();
        });

        it('should call startIncrementCurrentStep', () => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleIncrementStep')();
            expect(startIncrementCurrentStep).toHaveBeenCalled();
        });

        it('should call startSubmitApplication', () => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleIncrementStep')();
            expect(startSubmitApplication).toHaveBeenCalled();
        });
    });
});
