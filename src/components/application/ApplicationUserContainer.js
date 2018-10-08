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
                    handleDecrementStep={this.handleDecrementStep}
                    handleIncrementStep={this.handleIncrementStep}
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
    startDecrementCurrentStep: () => dispatch(startDecrementCurrentStep()),
    startIncrementCurrentStep: () => dispatch(startIncrementCurrentStep()),
    startSetApplicationUser: () => dispatch(startSetApplicationUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationUserContainer);

ApplicationUserContainer.propTypes = {
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    startClearApplicationUser: PropTypes.func.isRequired,
    startSetApplicationUser: PropTypes.func.isRequired,
};
