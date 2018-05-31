import React from 'react';
import PropTypes from 'prop-types';

export default class UserNameWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.user.email ? props.user.email : '',
            phoneAreaCode: props.user.phoneAreaCode ? props.user.phoneAreaCode : '',
            phonePrefix: props.user.phonePrefix ? props.user.phonePrefix : '',
            phoneLineNumber: props.user.phoneLineNumber ? props.user.phoneLineNumber : '',
            phoneExt: props.user.phoneExt ? props.user.phoneExt : '',
        };
    }

    onInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        return this.setState(() => ({
            [inputName]: inputValue,
        }));
    }

    onSubmit = () => {
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
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="text_input"
                            value={this.state.email}
                            onChange={this.onInputChange}
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
                                type="text"
                                name="phoneAreaCode"
                                placeholder="(919)"
                                className="text_input"
                                value={this.state.phoneAreaCode}
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="user_phone_number_input">
                            <input
                                type="text"
                                name="phonePrefix"
                                placeholder="123"
                                className="text_input"
                                value={this.state.phonePrefix}
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="user_phone_number_input">
                            <input
                                type="text"
                                name="phoneLineNumber"
                                placeholder="4567"
                                className="text_input"
                                value={this.state.phoneLineNumber}
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="user_phone_number_input">
                            <input
                                type="text"
                                name="phoneExt"
                                placeholder="Ext."
                                className="text_input"
                                value={this.state.phoneExt}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={this.onSubmit} className="button">Save Contact Info</button>
                </div>
            </div>
        )
    }
}

UserNameWidget.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
