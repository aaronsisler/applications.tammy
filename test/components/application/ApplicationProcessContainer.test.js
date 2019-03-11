import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationProcessContainer } from 'Application/ApplicationProcessContainer';
import { position, positionId } from '../../fixtures/positions';
import history from 'Tools/history';
jest.mock('Tools/history');

describe('ApplicationProcessContainer', () => {
    let wrapper;
    const push = jest.fn();
    const startResetApplicationProcess = jest.fn();

    const buildWrapper = (positionInput, currentStep = 0) => {
        wrapper = shallow(
            <ApplicationProcessContainer
                currentStep={currentStep}
                position={positionInput}
                positionId={positionId}
                startResetApplicationProcess={startResetApplicationProcess}
            />
        );
    };

    it('should call startResetApplicationProcess on unmount', () => {
        buildWrapper(position, 0);

        wrapper.unmount();

        expect(startResetApplicationProcess).toHaveBeenCalled();
    });

    describe('when position is found', () => {
        describe('when on User Info Step', () => {
            it('should render correctly', () => {
                buildWrapper(position, 0);

                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when on User Documents Step', () => {
            it('should render correctly', () => {
                buildWrapper(position, 1);

                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when on Review Step', () => {
            it('should render correctly', () => {
                buildWrapper(position, 2);

                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('when on Submitted Step', () => {
            it('should render correctly', () => {
                buildWrapper(position, 3);

                expect(wrapper).toMatchSnapshot();
            });
        });
    });

    describe('when position is NOT found', () => {
        beforeEach(() => {
            history.push = push;
            buildWrapper(undefined, undefined);
        });

        it('should call history.push with correct route', () => {
            expect(push).toHaveBeenLastCalledWith(`/not_found`);
        })
    });
});
