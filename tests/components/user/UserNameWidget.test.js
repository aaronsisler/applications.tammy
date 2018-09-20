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
                const value = 'Johnny';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should call handleRequiredValidation on blur', () => {
                wrapper.find(`#${name}`).simulate('blur');

                expect(inputToolsMock.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        it('should set middle name on input change', () => {
            const name = 'middleName';
            const value = 'middleton';

            wrapper.find(`#${name}`).simulate('change', {
                target: { name, value }
            });

            expect(wrapper.state(name)).toBe(value);
        });

        describe('Last Name Input', () => {
            const name = 'lastName';

            it('should set last name on input change', () => {
                const value = 'Appleseed';
                const target = { name, value };

                wrapper.find(`#${name}`).simulate('change', { target });

                expect(wrapper.state(name)).toBe(value);
            });

            it('should call handleRequiredValidation on blur', () => {
                wrapper.find(`#${name}`).simulate('blur');

                expect(inputToolsMock.handleRequiredValidation).toHaveBeenCalled();
            });
        });

        it('should set display name on input change', () => {
            const name = 'displayName';
            const value = 'Johnny Appleseed';

            wrapper.find(`#${name}`).simulate('change', {
                target: { value }
            });

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

        it('should render UserNameWidget with default props', () => {
            const defaultUserName = {
                firstName: '',
                middleName: '',
                lastName: '',
                displayName: '',
            }
            buildWrapper(defaultUserName);

            expect(wrapper.state()).toEqual(defaultUserName);
        });
    });
});
