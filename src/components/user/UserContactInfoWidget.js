import React from 'react';
import PropTypes from 'prop-types';
import { requiredInputFieldClassName } from '../../tools/constants';
import { isEmailValid } from '../../tools/email';

export default class UserNameWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: props.user.email ? true : false,
            email: props.user.email ? props.user.email : '',
            phoneAreaCode: props.user.phoneAreaCode ? props.user.phoneAreaCode : '',
            phonePrefix: props.user.phonePrefix ? props.user.phonePrefix : '',
            phoneLineNumber: props.user.phoneLineNumber ? props.user.phoneLineNumber : '',
            phoneExt: props.user.phoneExt ? props.user.phoneExt : '',
        };
    }

    handleEmailInput = (e) => {
        const inputValue = e.target.value;

        this.setState({ email: inputValue });
    }

    handleEmailValidation = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (isEmailValid(inputValue)) {
            document.getElementsByName(inputName)[0].classList.remove(requiredInputFieldClassName);
            return this.setState({ isEmailValid: true });
        }
        else {
            document.getElementsByName(inputName)[0].classList.add(requiredInputFieldClassName);
            return this.setState({ isEmailValid: false });
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
        const submitObject = Object.assign({}, this.state);
        this.props.onSubmit(submitObject);
    }

    render() {
        return (
            <div id="user_contact_info_widget">
                <div className="user_email_content" >
                    <div className="user_contact_info_content_title">
                        Email
                    </div>
                    <div className="user_email_input">
                        <input
                            readOnly={this.props.isReadOnly}
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="text_input"
                            value={this.state.email}
                            onChange={this.handleEmailInput}
                            onBlur={this.handleEmailValidation}
                        />
                    </div>
                </div>
                <div className="user_phone_number_content">
                    <div className="user_contact_info_content_title">
                        Phone Number
                    </div>
                    <div className="user_phone_number_inputs">
                        <div className="user_phone_number_input">
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="phoneAreaCode"
                                placeholder="(919)"
                                className="text_input"
                                value={this.state.phoneAreaCode}
                                onChange={this.handlePhoneNumberValidation}
                            />
                        </div>
                        <div className="user_phone_number_input">
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="phonePrefix"
                                placeholder="123"
                                className="text_input"
                                value={this.state.phonePrefix}
                                onChange={this.handlePhoneNumberValidation}
                            />
                        </div>
                        <div className="user_phone_number_input">
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="phoneLineNumber"
                                placeholder="4567"
                                className="text_input"
                                value={this.state.phoneLineNumber}
                                onChange={this.handlePhoneNumberValidation}
                            />
                        </div>
                        <div className="user_phone_number_input">
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="phoneExt"
                                placeholder="Ext."
                                className="text_input"
                                value={this.state.phoneExt}
                                onChange={this.handlePhoneNumberValidation}
                            />
                        </div>
                    </div>
                </div>
                <div className="user_contact_info_widget_button">
                    {!this.props.isReadOnly &&
                        <button
                            disabled={!this.state.isEmailValid}
                            onClick={this.handleSubmit}
                            className="button"
                        >
                            Update Contact Info
                    </button>
                    }
                </div>
            </div>
        )
    }
}

UserNameWidget.propTypes = {
    isReadOnly: PropTypes.bool,
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
