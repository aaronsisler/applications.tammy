import React from 'react';
import { shallow } from 'enzyme';
import { PositionApply } from 'Position/PositionApply';
import { positionId } from '../../fixtures/positions';

describe('PositionApply', () => {
    const startLogin = jest.fn();
    let wrapper;

    const buildWrapper = (isAuthenticated = true) => {
        wrapper = shallow(
            <PositionApply
                isAuthenticated={isAuthenticated}
                positionId={positionId}
                startLogin={startLogin}
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
                wrapper.find('button').simulate('click');
            });

            it('should call startLogin with apply redirectUrl', () => {
                expect(startLogin).toHaveBeenLastCalledWith(`/apply/${positionId}`);
            });
        });
    });
});
