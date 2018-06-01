import React from 'react';
import PropTypes from 'prop-types';
import { requiredInputFieldClassName } from '../../tools/constants';

export default class UserAddressWidget extends React.Component {
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

    handleRequiredValidation = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (!inputValue) {
            document.getElementsByName(inputName)[0].classList.add(requiredInputFieldClassName);
        }
        else {
            document.getElementsByName(inputName)[0].classList.remove(requiredInputFieldClassName);
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
            <div id="user_address_widget">
                <div className="user_address_content">
                    <div className="user_address_content_title">
                        Address
                    </div>
                    <div className="user_address_inputs">
                        <div className="user_address_street_addresses">
                            <div className="user_address_input">
                                <input
                                    type="text"
                                    name="addressLine1"
                                    placeholder="Address Line 1"
                                    className="text_input"
                                    value={this.state.addressLine1}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleRequiredValidation}
                                />
                            </div>
                            <div className="user_address_input">
                                <input
                                    type="text"
                                    name="addressLine2"
                                    placeholder="Address Line 2"
                                    className="text_input"
                                    value={this.state.addressLine2}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="user_address_city_state_zip">
                            <div className="user_address_input">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="text_input"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleRequiredValidation}
                                />
                            </div>
                            <div className="user_address_input">
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    className="text_input"
                                    value={this.state.state}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleRequiredValidation}
                                />
                            </div>
                            <div className="user_address_input">
                                <input
                                    type="text"
                                    name="postalCode"
                                    placeholder="Postal Code"
                                    className="text_input"
                                    value={this.state.postalCode}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleRequiredValidation}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        disabled={!this.state.addressLine1 || !this.state.city || !this.state.state || !this.state.postalCode}
                        onClick={this.handleSubmit}
                        className="button"
                    >
                        Save Address
                    </button>
                </div>
            </div>
        )
    }
}

UserAddressWidget.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
