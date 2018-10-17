import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationUserDocumentsContainer } from 'Application/ApplicationUserDocumentsContainer';
import userDocuments from '../../fixtures/userDocuments';

describe('ApplicationUserDocumentsContainer', () => {
    let wrapper;
    const startDecrementCurrentStep = jest.fn();
    const startIncrementCurrentStep = jest.fn();

    const buildWrapper = (applicationUserDocuments, userDocumentsInput) => {
        wrapper = shallow(
            <ApplicationUserDocumentsContainer
                applicationUserDocuments={applicationUserDocuments}
                startDecrementCurrentStep={startDecrementCurrentStep}
                startIncrementCurrentStep={startIncrementCurrentStep}
                userDocuments={userDocumentsInput}
            />
        );
    };

    describe('when application documents are selected', () => {
        beforeEach(() => {
            buildWrapper(userDocuments, userDocuments);
        });

        it('should render ApplicationUserDocumentsContainer correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should call startDecrementCurrentStep through ApplicationProgressButtonsWidget handleDecrementStep prop', () => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleDecrementStep')();
            expect(startDecrementCurrentStep).toHaveBeenCalled();
        });

        it('should call startIncrementCurrentStep through ApplicationProgressButtonsWidget handleIncrementStep prop', () => {
            wrapper.find('Connect(ApplicationProgressButtonsWidget)').prop('handleIncrementStep')();
            expect(startIncrementCurrentStep).toHaveBeenCalled();
        });
    });

    describe('when application documents are not selected', () => {
        it('should render ApplicationUserDocumentsContainer correctly', () => {
            buildWrapper([], userDocuments);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
