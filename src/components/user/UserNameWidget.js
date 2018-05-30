import React from 'react';
import PropTypes from 'prop-types';

export default class UserNameWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.firstName ? props.user.firstName : '',
            middleName: props.user.middleName ? props.user.middleName : '',
            lastName: props.user.lastName ? props.user.lastName : '',
            displayName: props.user.displayName ? props.user.displayName : `${props.user.firstName} ${props.user.lastName}`,
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
        const submitObject = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            displayName: this.state.displayName ? this.state.displayName : `${this.state.firstName} ${this.state.lastName}`,
        }
        this.props.onSubmit(submitObject);
        this.setState({ ...submitObject });
    }

    render() {
        return (
            <div id="user_name_widget">
                <div className="user_name_legal_content" >
                    <div className="user_name_content_title">
                        Full Name
                    </div>
                    <div className="user_name_legal_inputs">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            autoFocus
                            className="text_input"
                            value={this.state.firstName}
                            onChange={this.onInputChange}
                        />
                        <input
                            type="text"
                            name="middleName"
                            placeholder="Middle Name"
                            className="text_input"
                            value={this.state.middleName}
                            onChange={this.onInputChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="text_input"
                            value={this.state.lastName}
                            onChange={this.onInputChange}
                        />
                    </div>
                </div>
                <div className="user_name_display_content">
                    <div className="user_name_content_title">
                        Display Name
                    </div>
                    <div className="user_name_display_inputs">
                        <input
                            type="text"
                            name="displayName"
                            placeholder="Display Name"
                            className="text_input"
                            value={this.state.displayName}
                            onChange={this.onInputChange}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={this.onSubmit} className="button">Save User Info</button>
                </div>
            </div>
        )
    }
}

UserNameWidget.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
