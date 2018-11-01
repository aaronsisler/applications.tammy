import React from 'react';
import { shallow } from 'enzyme';
import { PositionApply } from 'Position/PositionApply';

describe('PositionApply', () => {
    const startLogin = jest.fn();
    const startSetWorkflowPosition = jest.fn();
    let wrapper;

    const buildWrapper = (isAuthenticated = true) => {
        wrapper = shallow(
            <PositionApply
                isAuthenticated={isAuthenticated}
                startLogin={startLogin}
                startSetWorkflowPosition={startSetWorkflowPosition}
            />
        );
    };

    describe('when user is Authenticated', () => {
        beforeEach(() => {
            buildWrapper();
        })

        it('should render correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('it should call startSetWorkflowPosition when the Apply link is clicked', () => {
            wrapper.find('.nav_link').simulate('click');

            expect(startSetWorkflowPosition).toHaveBeenCalled();
        });
    });

    describe('when user is NOT Authenticated', () => {
        beforeEach(() => {
            buildWrapper(false);
        })

        it('should render correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('when Login button is clicked', () => {
            beforeEach(() => {
                wrapper.find('.button').simulate('click');
            });

            it('should call startSetWorkflowPosition', () => {
                expect(startSetWorkflowPosition).toHaveBeenCalled();
            });

            it('should call startLogin with apply redirectUrl', () => {
                expect(startLogin).toHaveBeenLastCalledWith('apply');
            });

            it('should call startSetWorkflowPosition before startLogin', () => {
                expect(startSetWorkflowPosition).toHaveBeenCalledBefore(startLogin);
            });
        });
    });
});
