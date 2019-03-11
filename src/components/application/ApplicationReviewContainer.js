import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import UserDocumentsList from 'Shared/userDocuments/UserDocumentsList';
import UserProfileContainer from 'User/UserProfileContainer';
import { startSubmitApplication } from 'Actions/application';
import { startDecrementCurrentStep, startIncrementCurrentStep } from 'Actions/applicationProcess';

export class ApplicationReviewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementStep = () => this.props.startDecrementCurrentStep();


    handleIncrementStep = () => {
        this.props.startSubmitApplication(this.props.positionId);
        this.props.startIncrementCurrentStep();
    }

    render() {
        return (
            <div className="application_review_container">
                <div className="application_review_container__wrapper">
                    <ApplicationProgressButtonsWidget
                        handleDecrementStep={this.handleDecrementStep}
                        handleIncrementStep={this.handleIncrementStep}
                    />
                </div>
                <div className="application_review_container__user_documents">
                    <UserDocumentsList userDocuments={this.props.applicationUserDocuments} />
                </div>
                <UserProfileContainer isReadOnly={true} />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    applicationUserDocuments: state.application.userDocuments,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startDecrementCurrentStep: () => dispatch(startDecrementCurrentStep()),
    startIncrementCurrentStep: () => dispatch(startIncrementCurrentStep()),
    startSubmitApplication: (positionId) => dispatch(startSubmitApplication(positionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationReviewContainer);

ApplicationReviewContainer.propTypes = {
    applicationUserDocuments: PropTypes.array.isRequired,
    positionId: PropTypes.string.isRequired,
    startDecrementCurrentStep: PropTypes.func.isRequired,
    startIncrementCurrentStep: PropTypes.func.isRequired,
    startSubmitApplication: PropTypes.func.isRequired,
};
