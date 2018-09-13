
import React from 'react';
import { shallow } from 'enzyme';
import UserAddressWidget from '../../../src/components/user/UserAddressWidget';
import user from '../../fixtures/user';
import * as inputTools from '../../../src/components/user/tools/inputs';
jest.mock('../../../src/components/user/tools/inputs', () => ({ handleRequiredValidation: jest.fn() }));

describe('UserAddressWidget', () => {
    const onSubmit = jest.fn();
    let wrapper;

    describe('when isReadOnly is FALSE', () => {
        beforeEach(() => {
            wrapper = shallow(
                <UserAddressWidget
                    isReadOnly={false}
                    onSubmit={onSubmit}
                    user={user}
                />);
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        xit('should render UserAddressWidget correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('Address Line 1 Input', () => {
            const name = 'addressLine1';

            it('should set address line 1 on input change', () => {
                const value = '123 Evergreen Terrace';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should call handleRequiredValidation on blur', () => {
                wrapper.find(`#${name}`).simulate('blur');

                expect(inputTools.handleRequiredValidation).toHaveBeenCalled();
            });
        })

        it('should set address line 2 on input change', () => {
            const name = 'addressLine2';
            const value = 'Apt 456';

            wrapper.find(`#${name}`).simulate('change', {
                target: { name, value }
            });

            expect(wrapper.state(name)).toBe(value);
        });

        describe('City Input', () => {
            const name = 'city';
            it('should set city on input change', () => {
                const value = 'Durham';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should call handleRequiredValidation on blur', () => {
                jest.spyOn(inputTools, 'handleRequiredValidation');

                wrapper.find(`#${name}`).simulate('blur');

                expect(inputTools.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        describe('State Input', () => {
            const name = 'state';

            it('should set state on valid input change', () => {
                const value = 'NC';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set state on invalid input change', () => {
                const value = '1';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { value }
                });

                expect(wrapper.state(name)).toBe(user[name]);
            });

            it('should call handleRequiredValidation on blur', () => {
                jest.spyOn(inputTools, 'handleRequiredValidation');

                wrapper.find(`#${name}`).simulate('blur');

                expect(inputTools.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        describe('Postal Code Input', () => {
            const name = 'postalCode';

            it('should set postal code on valid input change', () => {
                const value = '12345';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set postal code on invalid input change', () => {
                const value = 'a';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { value }
                });

                expect(wrapper.state(name)).toBe(user[name]);
            });

            it('should call handleRequiredValidation on blur', () => {
                jest.spyOn(inputTools, 'handleRequiredValidation');

                wrapper.find(`#${name}`).simulate('blur');

                expect(inputTools.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        describe('Update Address button', () => {
            it('should be enabled when required fields ARE populated', () => {
                expect(wrapper.find('button').props().disabled).toBe(false);
            });

            it('should be enabled when required fields ARE populated', () => {
                wrapper.setState({
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    state: '',
                    postalCode: ''
                });

                expect(wrapper.find('button').props().disabled).toBe(true);
            });

            it('should call onSubmit prop on button click', () => {
                const {
                    addressLine1,
                    addressLine2,
                    city,
                    state,
                    postalCode,
                } = user;

                wrapper.find('button').simulate('click');

                expect(onSubmit).toHaveBeenLastCalledWith({
                    addressLine1,
                    addressLine2,
                    city,
                    state,
                    postalCode,
                });
            });
        });
    });

    describe('when isReadOnly is TRUE', () => {
        beforeEach(() => {
            wrapper = shallow(
                <UserAddressWidget
                    isReadOnly={true}
                    onSubmit={onSubmit}
                    user={user}
                />);
        });

        xit('should render UserAddressWidget correctly', () => {
            expect(wrapper).toMatchSnapshot();
        })
    })
});
