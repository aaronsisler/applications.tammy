import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetApplicant } from 'Actions/applicant';

export class ApplicantsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="applicants_list_item" onClick={this.props.startSetApplicant}>
                <div className="applicants_list_item__content">
                    <div className="applicants_list_item__display_name">
                        {this.props.displayName}
                    </div>
                    <div className="applicants_list_item__legal_name">
                        {this.props.lastName},&nbsp;{this.props.firstName}
                    </div>
                </div>
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
    startSetApplicant: () => dispatch(startSetApplicant(ownProps.applicantId)),
});

export default connect(undefined, mapDispatchToProps)(ApplicantsListItem);

ApplicantsListItem.propTypes = {
    applicantId: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    startSetApplicant: PropTypes.func.isRequired,
};
