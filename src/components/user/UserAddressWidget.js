import React from 'react';
import PropTypes from 'prop-types';
import InputTools from 'User/tools/inputs';

export default class UserAddressWidget extends React.Component {
    inputTools = new InputTools();

    constructor(props) {
        super(props);
        this.state = {
            addressLine1: props.user.addressLine1 ? props.user.addressLine1 : '',
            addressLine2: props.user.addressLine2 ? props.user.addressLine2 : '',
            city: props.user.city ? props.user.city : '',
            state: props.user.state ? props.user.state : '',
            postalCode: props.user.postalCode ? props.user.postalCode : '',
        };
    }

    componentDidUpdate(prevProps) {
        const { user: oldUser } = prevProps;
        const { user: newUser } = this.props;

        if (oldUser.userId !== newUser.userId) {
            return this.setState(() => ({
                addressLine1: newUser.addressLine1 ? newUser.addressLine1 : '',
                addressLine2: newUser.addressLine2 ? newUser.addressLine2 : '',
                city: newUser.city ? newUser.city : '',
                state: newUser.state ? newUser.state : '',
                postalCode: newUser.postalCode ? newUser.postalCode : '',
            }));
        }
    }

    handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        switch (inputName) {
            case 'postalCode':
                this.handlePostalCodeValidation(inputValue);
                return;
            case 'state':
                this.handleStateAbbreviationValidation(inputValue);
                return;
            default:
                this.handleAddInput(inputName, inputValue);
                return;
        }
    }

    handlePostalCodeValidation = (inputValue) => {
        if (!inputValue || inputValue.match(/^\d{1,5}?$/)) {
            this.setState(() => ({ postalCode: inputValue }));
        }
    }

    handleStateAbbreviationValidation = (inputValue) => {
        if (!inputValue || inputValue.match(/^[A-Za-z]{1,2}$/)) {
            this.setState(() => ({ state: inputValue.toUpperCase() }));
        }
    }

    handleAddInput = (inputName, inputValue) => (
        this.setState(() => ({
            [inputName]: inputValue
        }))
    )

    handleSubmit = () => {
        const submitObject = Object.assign({}, this.state);
        this.props.onSubmit(submitObject);
    }

    render() {
        return (
            <div className="user_address_widget">
                <div className="user_address_content">
                    <div className="user_address_widget__title">
                        Address
                    </div>
                    <div className="user_address_widget__inputs">
                        <input
                            readOnly={this.props.isReadOnly}
                            type="text"
                            name="addressLine1"
                            placeholder="Address Line 1"
                            value={this.state.addressLine1}
                            onChange={this.handleInputChange}
                            onBlur={this.inputTools.handleRequiredValidation}
                        />
                        <input
                            readOnly={this.props.isReadOnly}
                            type="text"
                            name="addressLine2"
                            placeholder="Address Line 2"
                            value={this.state.addressLine2}
                            onChange={this.handleInputChange}
                        />
                        <div className="user_address_widget__inputs_location">
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="city"
                                placeholder="City"
                                value={this.state.city}
                                onChange={this.handleInputChange}
                                onBlur={this.inputTools.handleRequiredValidation}
                            />
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="state"
                                placeholder="State"
                                value={this.state.state}
                                onChange={this.handleInputChange}
                                onBlur={this.inputTools.handleRequiredValidation}
                            />
                            <input
                                readOnly={this.props.isReadOnly}
                                type="text"
                                name="postalCode"
                                placeholder="Postal Code"
                                value={this.state.postalCode}
                                onChange={this.handleInputChange}
                                onBlur={this.inputTools.handleRequiredValidation}
                            />
                        </div>
                    </div>
                </div>
                {!this.props.isReadOnly &&
                    <div className="user_address_widget__button">
                        <button
                            disabled={!this.state.addressLine1 || !this.state.city || !this.state.state || !this.state.postalCode}
                            onClick={this.handleSubmit}
                        >
                            Update Address
                       </button>
                    </div>
                }
            </div>
        )
    }
}

UserAddressWidget.propTypes = {
    isReadOnly: PropTypes.bool,
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};
