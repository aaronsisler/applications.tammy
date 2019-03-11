
import React from 'react';
import { shallow } from 'enzyme';
import UserContactInfoWidget from 'User/UserContactInfoWidget';
import user from '../../fixtures/user';
import InputTools from 'User/tools/inputs';
jest.mock('User/tools/inputs');

describe('UserContactInfoWidget', () => {
    const onSubmit = jest.fn();
    let wrapper;
    let instance;
    let inputToolsMock;

    const defaultEmptyState = {
        email: '',
        phoneAreaCode: '',
        phonePrefix: '',
        phoneLineNumber: '',
        phoneExt: '',
        isValidEmail: false
    };

    const buildWrapper = (userInput = {}, isReadOnly = true) => {
        wrapper = shallow(
            <UserContactInfoWidget
                isReadOnly={isReadOnly}
                onSubmit={onSubmit}
                user={userInput}
            />);
    };

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render correctly with default props', () => {
        buildWrapper();

        expect(wrapper.state()).toEqual(defaultEmptyState);
    });

    describe('when user props change', () => {
        const newEmail = 'new_email@taco.com';
        const newPhoneAreaCode = '123';
        const newPhonePrefix = '456';
        const newPhoneLineNumber = '7890';
        const newPhoneExt = '54321';

        const newUser = {
            email: newEmail,
            phoneAreaCode: newPhoneAreaCode,
            phonePrefix: newPhonePrefix,
            phoneLineNumber: newPhoneLineNumber,
            phoneExt: newPhoneExt,
        };

        beforeEach(() => {
            buildWrapper(user);
        });

        describe('when userId is the same', () => {
            it('should NOT update the state', () => {
                wrapper.setProps({
                    user: {
                        ...user,
                        ...newUser
                    }
                });

                expect(wrapper.state()).toEqual(
                    {
                        email: user.email,
                        phoneAreaCode: user.phoneAreaCode,
                        phonePrefix: user.phonePrefix,
                        phoneLineNumber: user.phoneLineNumber,
                        phoneExt: user.phoneExt,
                        isValidEmail: true
                    });
            });
        });

        describe('when userId is NOT the same', () => {
            it('should update the state', () => {
                wrapper.setProps(
                    {
                        user: {
                            ...newUser,
                            userId: 'Not Original Id'
                        }
                    });

                expect(wrapper.state()).toEqual({ ...newUser, isValidEmail: true });
            });

            it('should render correctly with default props', () => {
                wrapper.setProps(
                    {
                        user: {
                            userId: 'Not Original Id'
                        }
                    });

                expect(wrapper.state()).toEqual(defaultEmptyState);
            });
        });
    });

    describe('handleEmailValidation', () => {
        const name = 'email';
        const value = user.email;

        beforeEach(() => {
            InputTools.mockClear();
            buildWrapper(user, false);
            [inputToolsMock] = InputTools.mock.instances;
            instance = wrapper.instance();
        });

        describe('when email is valid', () => {
            it('should remove the required field classname from the email input element', () => {
                const target = { name, value };

                instance.handleEmailValidation({ target });

                expect(inputToolsMock.handleSetErrorClassname)
                    .toHaveBeenLastCalledWith(name);
            });

            it('should set isEmailValid in state to true', () => {
                const target = { name, value };

                instance.handleEmailValidation({ target });

                expect(wrapper.state('isValidEmail')).toBe(true);
            });
        });

        describe('when email is NOT valid', () => {
            const target = { name, value: 'bad_email' };
            it('should add the required field classname to the email input element', () => {
                instance.handleEmailValidation({ target });

                expect(inputToolsMock.handleSetErrorClassname)
                    .toHaveBeenLastCalledWith(name, false);
            });

            it('should set isEmailValid in state to false', () => {
                instance.handleEmailValidation({ target });

                expect(wrapper.state('isValidEmail')).toBe(false);
            });
        });
    });

    describe('when isReadOnly is FALSE', () => {
        beforeEach(() => {
            buildWrapper(user, false);
            instance = wrapper.instance();
        });

        it('should render UserContactInfoWidget correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('Email Input', () => {
            const name = 'email';

            it('should set email on input change', () => {
                const value = 'jenny.appleseed@gmail.com';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            xit('should call handleEmailValidation on blur', () => {
                jest.spyOn(instance, 'handleEmailValidation').mockImplementation(jest.fn());

                wrapper.find(`#${name}`).simulate('blur');

                expect(instance.handleEmailValidation).toHaveBeenCalled();
            });
        });

        describe('Phone Area Code Input', () => {
            const name = 'phoneAreaCode';

            it('should set phone area code on valid input change', () => {
                const value = '123';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone area code to empty string when input is cleared', () => {
                const value = '';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone area code on invalid input change', () => {
                const value = 'a';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Phone Prefix Input', () => {
            const name = 'phonePrefix';

            it('should set phone prefix on valid input change', () => {
                const value = '123';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone prefix to empty string when input is cleared', () => {
                const value = '';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone prefix on invalid input change', () => {
                const value = 'a';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Phone Line Number Input', () => {
            const name = 'phoneLineNumber';

            it('should set phone line number on valid input change', () => {
                const value = '1234';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone line number to empty string when input is cleared', () => {
                const value = '';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone line number on invalid input change', () => {
                const value = 'a';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Phone Ext Input', () => {
            const name = 'phoneExt';

            it('should set phone ext on valid input change', () => {
                const value = '01234';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone ext to empty string when input is cleared', () => {
                const value = '';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone ext on invalid input change', () => {
                const value = 'a';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Update Contact Info button', () => {
            it('should be enabled when isValidEmail is TRUE', () => {
                expect(wrapper.find('button').props().disabled).toBe(false);
            });

            it('should be disabled when isValidEmail is FALSE', () => {
                wrapper.setState({
                    email: 'taco.taco',
                    isValidEmail: false,
                });

                expect(wrapper.find('button').props().disabled).toBe(true);
            });

            it('should call onSubmit prop on button click', () => {
                const {
                    email,
                    phoneAreaCode,
                    phonePrefix,
                    phoneLineNumber,
                    phoneExt,
                } = user;

                wrapper.find('button').simulate('click');

                expect(onSubmit).toHaveBeenLastCalledWith({
                    email,
                    phoneAreaCode,
                    phonePrefix,
                    phoneLineNumber,
                    phoneExt,
                });
            });
        });
    });

    describe('when isReadOnly is TRUE', () => {
        it('should render UserContactInfoWidget correctly', () => {
            buildWrapper(user);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
