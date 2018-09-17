
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

    const buildWrapper = (isReadOnly = false) => {
        wrapper = shallow(
            <UserContactInfoWidget
                isReadOnly={isReadOnly}
                onSubmit={onSubmit}
                user={user}
            />);
    };

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('handleEmailValidation', () => {
        const name = 'email';
        const value = user.email;

        beforeEach(() => {
            InputTools.mockClear();
            buildWrapper();
            [inputToolsMock] = InputTools.mock.instances;
            instance = wrapper.instance();
        });

        describe('when email is valid', () => {
            it('should remove the required field classname from the email input element', () => {
                const targetMock = { name, value };

                instance.handleEmailValidation({ target: targetMock });

                expect(inputToolsMock.handleSetErrorClassname)
                    .toHaveBeenLastCalledWith(name);
            });

            it('should set isEmailValid in state to true', () => {
                const targetMock = { name, value };

                instance.handleEmailValidation({ target: targetMock });

                expect(wrapper.state('isValidEmail')).toBe(true);
            });
        });

        describe('when email is NOT valid', () => {
            const targetMock = { name, value: 'bad_email' };
            it('should add the required field classname to the email input element', () => {
                instance.handleEmailValidation({ target: targetMock });

                expect(inputToolsMock.handleSetErrorClassname)
                    .toHaveBeenLastCalledWith(name, false);
            });

            it('should set isEmailValid in state to false', () => {
                instance.handleEmailValidation({ target: targetMock });

                expect(wrapper.state('isValidEmail')).toBe(false);
            });
        });
    });

    describe('when isReadOnly is FALSE', () => {
        beforeEach(() => {
            buildWrapper();
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

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone area code to empty string when input is cleared', () => {
                const value = '';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone area code on invalid input change', () => {
                const value = 'a';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Phone Prefix Input', () => {
            const name = 'phonePrefix';

            it('should set phone prefix on valid input change', () => {
                const value = '123';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone prefix to empty string when input is cleared', () => {
                const value = '';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone prefix on invalid input change', () => {
                const value = 'a';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Phone Line Number Input', () => {
            const name = 'phoneLineNumber';

            it('should set phone line number on valid input change', () => {
                const value = '1234';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone line number to empty string when input is cleared', () => {
                const value = '';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone line number on invalid input change', () => {
                const value = 'a';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(user[name]);
            });
        });

        describe('Phone Ext Input', () => {
            const name = 'phoneExt';

            it('should set phone ext on valid input change', () => {
                const value = '01234';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should set phone ext to empty string when input is cleared', () => {
                const value = '';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should NOT set phone ext on invalid input change', () => {
                const value = 'a';

                wrapper.find(`#${name}`).simulate('change', {
                    target: { name, value }
                });

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
            buildWrapper(true);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
