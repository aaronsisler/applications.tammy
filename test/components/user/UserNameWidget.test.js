import React from 'react';
import { shallow } from 'enzyme';
import UserNameWidget from 'User/UserNameWidget';
import user from '../../fixtures/user';
import InputTools from 'User/tools/inputs';
jest.mock('User/tools/inputs');

describe('UserNameWidget', () => {
    const onSubmit = jest.fn();
    let wrapper;
    let inputToolsMock;

    const buildWrapper = (userInput, isReadOnly = true) => {
        wrapper = shallow(
            <UserNameWidget
                isReadOnly={isReadOnly}
                onSubmit={onSubmit}
                user={userInput}
            />);
    }

    describe('when user props change', () => {
        const firstName = 'New First Name';
        const middleName = 'New Middle Name';
        const lastName = 'New Last Name';
        const displayName = 'New Display Name';

        beforeEach(() => {
            buildWrapper(user);
        });

        describe('when userId is the same', () => {
            it('should NOT update the state', () => {
                wrapper.setProps({
                    user: {
                        ...user,
                        firstName,
                        middleName,
                        lastName,
                        displayName,
                    }
                });

                expect(wrapper.state()).toEqual(
                    {
                        firstName: user.firstName,
                        middleName: user.middleName,
                        lastName: user.lastName,
                        displayName: user.displayName
                    });
            });
        });

        describe('when userId is NOT the same', () => {
            it('should update the state', () => {
                wrapper.setProps(
                    {
                        user: {
                            ...user,
                            firstName,
                            middleName,
                            lastName,
                            displayName,
                            userId: 'Not Original Id'
                        }
                    });

                expect(wrapper.state()).toEqual({ firstName, middleName, lastName, displayName });
            });

            it('should render correctly with default props', () => {
                wrapper.setProps(
                    {
                        user: {
                            userId: 'Not Original Id'
                        }
                    });

                expect(wrapper.state()).toEqual({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    displayName: '',
                });
            });
        });
    });

    it('should render correctly with default props', () => {
        const defaultUserName = {
            firstName: '',
            middleName: '',
            lastName: '',
            displayName: '',
        }
        buildWrapper({});

        expect(wrapper.state()).toEqual(defaultUserName);
    });

    describe('when isReadOnly is FALSE', () => {
        beforeEach(() => {
            InputTools.mockClear();
            buildWrapper(user, false);
            [inputToolsMock] = InputTools.mock.instances;
        });

        it('should render UserNameWidget correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('First Name Input', () => {
            const name = 'firstName';

            it('should set first name on input change', () => {
                const value = 'New name';
                const target = { name, value };

                wrapper.find(`.user_name_widget__legal_name_inputs > input`)
                    .at(0)
                    .simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should call handleRequiredValidation on blur', () => {
                wrapper.find(`.user_name_widget__legal_name_inputs > input`)
                    .at(0)
                    .simulate('blur');

                expect(inputToolsMock.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        it('should set middle name on input change', () => {
            const value = 'New middle name';
            const target = { name, value };

            wrapper.find(`.user_name_widget__legal_name_inputs > input`)
                .at(1)
                .simulate('change', { target });

            expect(wrapper.state(name)).toBe(value);
        });

        describe('Last Name Input', () => {
            it('should set last name on input change', () => {
                const value = 'New last name';
                const target = { name, value };

                wrapper.find(`.user_name_widget__legal_name_inputs > input`)
                    .at(2)
                    .simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should call handleRequiredValidation on blur', () => {
                wrapper.find(`.user_name_widget__legal_name_inputs > input`)
                    .at(2)
                    .simulate('blur');

                expect(inputToolsMock.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        it('should set display name on input change', () => {
            const name = 'displayName';
            const value = 'New Display Name';
            const target = { name, value };

            wrapper.find(`.user_name_widget__display_name_inputs > input`)
                .at(0)
                .simulate('change', { target });

            expect(wrapper.state(name)).toBe(value);
        });

        describe('Update User Info button', () => {
            const {
                firstName,
                middleName,
                lastName,
                displayName,
            } = user;

            it('should be enabled when required fields ARE populated', () => {
                expect(wrapper.find('button').props().disabled).toBe(false);
            });

            it('should be disabled when required fields are NOT populated', () => {
                wrapper.setState({
                    firstName: '',
                    lastName: '',
                    displayName: '',
                });

                expect(wrapper.find('button').props().disabled).toBe(true);
            });

            it('should call onSubmit prop on button click', () => {
                wrapper.find('button').simulate('click');

                expect(onSubmit).toHaveBeenLastCalledWith({
                    firstName,
                    middleName,
                    lastName,
                    displayName,
                });
            });

            it('should set display name to first and last name if empty', () => {
                wrapper.setState({ displayName: '' });
                wrapper.find('button').simulate('click');

                const [[submittedObject]] = onSubmit.mock.calls;

                expect(submittedObject.displayName).toEqual(displayName);
            });

            it('should set the state to the submitted object', () => {
                wrapper.setState({ displayName: '' });
                wrapper.find('button').simulate('click');

                const [[submittedObject]] = onSubmit.mock.calls;

                expect(wrapper.state()).toEqual({ ...submittedObject, });
            });
        });
    });

    describe('when isReadOnly is TRUE', () => {
        it('should render UserNameWidget correctly', () => {
            buildWrapper(user);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
