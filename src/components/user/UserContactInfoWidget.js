import React from 'react';
import PropTypes from 'prop-types';
import InputTools from 'User/tools/inputs';
import { isEmailValid } from 'Tools/email';

export default class UserNameWidget extends React.Component {
    inputTools = new InputTools();

    constructor(props) {
        super(props);
        this.state = {
            isValidEmail: props.user.email ? true : false,
            email: props.user.email ? props.user.email : '',
            phoneAreaCode: props.user.phoneAreaCode ? props.user.phoneAreaCode : '',
            phonePrefix: props.user.phonePrefix ? props.user.phonePrefix : '',
            phoneLineNumber: props.user.phoneLineNumber ? props.user.phoneLineNumber : '',
            phoneExt: props.user.phoneExt ? props.user.phoneExt : '',
        };
    }

    componentDidUpdate(prevProps) {
        const { user: oldUser } = prevProps;
        const { user: newUser } = this.props;

        if (oldUser.userId !== newUser.userId) {
            return this.setState(() => ({
                isValidEmail: newUser.email ? true : false,
                email: newUser.email ? newUser.email : '',
                phoneAreaCode: newUser.phoneAreaCode ? newUser.phoneAreaCode : '',
                phonePrefix: newUser.phonePrefix ? newUser.phonePrefix : '',
                phoneLineNumber: newUser.phoneLineNumber ? newUser.phoneLineNumber : '',
                phoneExt: newUser.phoneExt ? newUser.phoneExt : '',
            }));
        }
    }

    handleEmailInput = (e) => {
        const inputValue = e.target.value;

        this.setState({ email: inputValue });
    }

    handleEmailValidation = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (!inputValue || isEmailValid(inputValue)) {
            this.inputTools.handleSetErrorClassname(inputName);
            return this.setState({ isValidEmail: true });
        }
        else {
            this.inputTools.handleSetErrorClassname(inputName, false);
            return this.setState({ isValidEmail: false });
        }
    }

    handlePhoneNumberValidation = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (!inputValue) {
            return this.setState({ [inputName]: inputValue });
        }

        switch (inputName) {
            case 'phoneAreaCode':
            case 'phonePrefix':
                if (inputValue.match(/^\d{1,3}?$/)) {
                    this.setState({ [inputName]: inputValue });
                }
                return;
            case 'phoneLineNumber':
                if (inputValue.match(/^\d{1,4}?$/)) {
                    this.setState({ [inputName]: inputValue });
                }
                return;
            default:
                if (inputValue.match(/^\d{1,5}?$/)) {
                    this.setState({ [inputName]: inputValue });
                }
                return;
        }
    }

    handleSubmit = () => {
        /* eslint-disable-next-line no-unused-vars */
        const { isValidEmail, ...submitObject } = Object.assign({}, this.state);
        this.props.onSubmit(submitObject);
    }

    render() {
        return (
            <div className="user_contact_info_widget">
                <div className="user_contact_info_widget__email" >
                    <div className="user_contact_info_widget__email_title" >
                        Email
                    </div>
                    <input
                        id="email"
                        name="email"
                        onBlur={this.handleEmailValidation}
                        onChange={this.handleEmailInput}
                        placeholder="Email"
                        readOnly={this.props.isReadOnly}
                        type="text"
                        value={this.state.email}
                    />
                </div>
                <div className="user_contact_info_widget__phone">
                    <div className="user_contact_info_widget__phone_title">
                        Phone Number
                    </div>
                    <div className="user_contact_info_widget__phone_inputs">
                        <input
                            id="phoneAreaCode"
                            name="phoneAreaCode"
                            onChange={this.handlePhoneNumberValidation}
                            placeholder="(919)"
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.phoneAreaCode}
                        />
                        <input
                            id="phonePrefix"
                            name="phonePrefix"
                            onChange={this.handlePhoneNumberValidation}
                            placeholder="123"
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.phonePrefix}
                        />
                        <input
                            id="phoneLineNumber"
                            name="phoneLineNumber"
                            onChange={this.handlePhoneNumberValidation}
                            readOnly={this.props.isReadOnly}
                            placeholder="4567"
                            type="text"
                            value={this.state.phoneLineNumber}
                        />
                        <input
                            id="phoneExt"
                            name="phoneExt"
                            onChange={this.handlePhoneNumberValidation}
                            placeholder="Ext."
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.phoneExt}
                        />
                    </div>
                </div>
                {!this.props.isReadOnly &&
                    <div className="user_contact_info_widget__button">
                        <button
                            disabled={!this.state.isValidEmail}
                            onClick={this.handleSubmit}
                        >
                            Update Contact Info
                        </button>
                    </div>
                }
            </div>
        )
    }
}

UserNameWidget.propTypes = {
    isReadOnly: PropTypes.bool,
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};
