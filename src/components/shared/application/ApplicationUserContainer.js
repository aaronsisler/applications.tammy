import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import UserProfileContainer from '../../user/UserProfileContainer';
import { startClearApplicationUser, startSetApplicationUser } from '../../../actions/application';

export class ApplicationUserContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementCurrentStep = () => {
        this.props.startClearApplicationUser();
        this.props.handleDecrementCurrentStep();
    }

    handleIncrementCurrentStep = () => {
        this.props.startSetApplicationUser();
        this.props.handleIncrementCurrentStep();
    }

    render() {
        return (
            <div className="application_user_container">
                <ApplicationProgressButtonsWidget
                    currentStep={this.props.currentStep}
                    maxSteps={this.props.maxSteps}
                    handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                    handleIncrementCurrentStep={this.handleIncrementCurrentStep}
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
    maxSteps: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    startClearApplicationUser: PropTypes.func.isRequired,
    startSetApplicationUser: PropTypes.func.isRequired,
};
