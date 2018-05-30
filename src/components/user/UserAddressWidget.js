import React from 'react';
import PropTypes from 'prop-types';

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

    onInputChange = (e) => {
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

    onSubmit = () => {
        const submitObject = Object.assign({}, this.state);
        this.props.onSubmit(submitObject);
        this.setState({ ...submitObject });
    }

    render() {
        return (
            <div id="user_address_widget">
                <div className="user_address_content" >
                    <div className="user_address_content_title">
                        Address
                    </div>
                    <div className="user_address_inputs">
                        <div className="user_address_street_addresses">
                            <input
                                type="text"
                                name="addressLine1"
                                placeholder="Address Line 1"
                                autoFocus
                                className="text_input"
                                value={this.state.addressLine1}
                                onChange={this.onInputChange}
                            />
                            <input
                                type="text"
                                name="addressLine2"
                                placeholder="Address Line 2"
                                autoFocus
                                className="text_input"
                                value={this.state.addressLine2}
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="user_address_city_state_zip">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                autoFocus
                                className="text_input"
                                value={this.state.city}
                                onChange={this.onInputChange}
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                autoFocus
                                className="text_input"
                                value={this.state.state}
                                onChange={this.onInputChange}
                            />
                            <input
                                type="text"
                                name="postalCode"
                                placeholder="Postal Code"
                                autoFocus
                                className="text_input"
                                value={this.state.postalCode}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={this.onSubmit} className="button">Save User Address</button>
                </div>
            </div>
        )
    }
}

UserAddressWidget.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
