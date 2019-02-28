import React from 'react';
import PropTypes from 'prop-types';
import InputTools from 'User/tools/inputs';

export default class UserNameWidget extends React.Component {
    inputTools = new InputTools();

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.firstName ? props.user.firstName : '',
            middleName: props.user.middleName ? props.user.middleName : '',
            lastName: props.user.lastName ? props.user.lastName : '',
            displayName: props.user.displayName ? props.user.displayName : ``,
        };
    }

    componentDidUpdate(prevProps) {
        const { user: oldUser } = prevProps;
        const { user: newUser } = this.props;

        if (oldUser.userId !== newUser.userId) {
            return this.setState(() => ({
                firstName: newUser.firstName ? newUser.firstName : '',
                middleName: newUser.middleName ? newUser.middleName : '',
                lastName: newUser.lastName ? newUser.lastName : '',
                displayName: newUser.displayName ? newUser.displayName : ``,
            }));
        }
    }

    handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        return this.setState(() => ({
            [inputName]: inputValue,
        }));
    }

    handleSubmit = () => {
        const displayName = this.state.displayName ? this.state.displayName : `${this.state.firstName} ${this.state.lastName}`
        const submitObject = Object.assign({}, this.state, { displayName });
        this.props.onSubmit(submitObject);
        this.setState({ ...submitObject });
    }

    render() {
        return (
            <div className="user_name_widget">
                {this.state.error}
                <div className="user_name_widget__legal_name" >
                    <div className="user_name_widget__legal_name_title">
                        Full Name
                    </div>
                    <div className="user_name_widget__legal_name_inputs">
                        <input
                            name="firstName"
                            onChange={this.handleInputChange}
                            onBlur={this.inputTools.handleRequiredValidation}
                            placeholder="First Name"
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.firstName}
                        />
                        <input
                            name="middleName"
                            onChange={this.handleInputChange}
                            placeholder="Middle Name"
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.middleName}
                        />
                        <input
                            onChange={this.handleInputChange}
                            onBlur={this.inputTools.handleRequiredValidation}
                            name="lastName"
                            placeholder="Last Name"
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.lastName}
                        />
                    </div>
                </div>
                <div className="user_name_widget__display_name">
                    <div className="user_name_widget__display_name_title">
                        Display Name
                    </div>
                    <div className="user_name_widget__display_name_inputs">
                        <input
                            name="displayName"
                            onChange={this.handleInputChange}
                            placeholder="Display Name"
                            readOnly={this.props.isReadOnly}
                            type="text"
                            value={this.state.displayName}
                        />
                    </div>
                </div>
                {!this.props.isReadOnly &&
                    <div className="user_name_widget__button">
                        <button
                            disabled={!this.state.firstName || !this.state.lastName}
                            onClick={this.handleSubmit}
                        >
                            Update User Info
                        </button>
                    </div>
                }
            </div>
        )
    }
}

UserNameWidget.propTypes = {
    isReadOnly: PropTypes.bool,
    onSubmit: PropTypes.func,
    user: PropTypes.object.isRequired,
};
