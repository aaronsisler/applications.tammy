import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    startClearApplicants,
    startSetApplicants,
} from 'Actions/applicants';
import selectApplicants from 'Selectors/applicants';
import ApplicantDetails from 'Applicant/ApplicantDetails';
import ApplicantsList from 'Applicant/ApplicantsList';
import ApplicantsListFilter from 'Applicant/ApplicantsListFilter';
import history from 'Tools/history';

export class ApplicantsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { positionId, position } = this.props;
        if (!position) {
            history.push('/not_found');
        }

        this.props.startSetApplicants(positionId);
    }

    componentWillUnmount() {
        this.props.startClearApplicants();
    }

    handleMobileClassname = () => this.props.applicantId ? "inbox_mobile" : ""

    render() {
        return (
            <div className="inbox_container">
                {this.props.applicants &&
                    <div className="inbox_widget">
                        <div className={`inbox_list ${this.handleMobileClassname()}`}>
                            <ApplicantsListFilter />
                            <ApplicantsList
                                applicants={this.props.applicants}
                                positionId={this.props.positionId}
                            />
                        </div>
                        <ApplicantDetails {...this.props} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => {
    const { positionId } = props.match.params;
    const position = positionId
        ? state.positions.find((statePosition) => statePosition.positionId == positionId)
        : undefined;

    return ({
        applicantId: props.match.params.applicantId,
        applicants: selectApplicants(state.applicants, state.filters.applicants),
        position,
        positionId,
    });
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplicants: () => dispatch(startClearApplicants()),
    startSetApplicants: (positionId) => dispatch(startSetApplicants(positionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsContainer);

ApplicantsContainer.propTypes = {
    applicantId: PropTypes.string,
    applicants: PropTypes.array,
    position: PropTypes.object,
    positionId: PropTypes.string,
    startClearApplicants: PropTypes.func.isRequired,
    startSetApplicants: PropTypes.func.isRequired,
};
