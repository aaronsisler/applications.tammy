import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import UserProfileContainer from 'User/UserProfileContainer';
import { startClearApplicationUser, startSetApplicationUser } from 'Actions/application';
import { startDecrementCurrentStep, startIncrementCurrentStep } from 'Actions/applicationProcess';

export class ApplicationUserContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementStep = () => {
        this.props.startClearApplicationUser();
        this.props.startDecrementCurrentStep();
    }

    handleIncrementStep = () => {
        this.props.startSetApplicationUser();
        this.props.startIncrementCurrentStep();
    }

    render() {
        return (
            <div className="application_user_container">
                <div className="application_user_container__wrapper">
                    <ApplicationProgressButtonsWidget
                        handleDecrementStep={this.handleDecrementStep}
                        handleIncrementStep={this.handleIncrementStep}
                    />
                </div>
                <UserProfileContainer />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplicationUser: () => dispatch(startClearApplicationUser()),
    startDecrementCurrentStep: () => dispatch(startDecrementCurrentStep()),
    startIncrementCurrentStep: () => dispatch(startIncrementCurrentStep()),
    startSetApplicationUser: () => dispatch(startSetApplicationUser()),
})

export default connect(undefined, mapDispatchToProps)(ApplicationUserContainer);

ApplicationUserContainer.propTypes = {
    startClearApplicationUser: PropTypes.func.isRequired,
    startDecrementCurrentStep: PropTypes.func.isRequired,
    startIncrementCurrentStep: PropTypes.func.isRequired,
    startSetApplicationUser: PropTypes.func.isRequired,
};
