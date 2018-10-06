import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import UserProfileContainer from 'User/UserProfileContainer';
import { startClearApplicationUser, startSetApplicationUser } from 'Actions/application';

export class ApplicationUserContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementStep = () => {
        this.props.startClearApplicationUser();
        this.props.handleDecrementCurrentStep();
    }

    handleIncrementStep = () => {
        this.props.startSetApplicationUser();
        this.props.handleIncrementCurrentStep();
    }

    render() {
        return (
            <div className="application_user_container">
                <ApplicationProgressButtonsWidget
                    currentStep={this.props.currentStep}
                    maxSteps={this.props.maxSteps}
                    handleDecrementCurrentStep={this.handleDecrementStep}
                    handleIncrementCurrentStep={this.handleIncrementStep}
                />
                <UserProfileContainer />
            </div>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    startClearApplicationUser: () => dispatch(startClearApplicationUser()),
    startSetApplicationUser: () => dispatch(startSetApplicationUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationUserContainer);

ApplicationUserContainer.propTypes = {
    currentStep: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    maxSteps: PropTypes.number.isRequired,
    startClearApplicationUser: PropTypes.func.isRequired,
    startSetApplicationUser: PropTypes.func.isRequired,
};
