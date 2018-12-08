import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PositionDetailsContent from 'Position/PositionDetailsContent';
import PositionWatchEditWidget from 'PositionWatch/PositionWatchEditWidget';
import { startSetWorkflowPosition } from 'Actions/workflow';

export class PositionWatchDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetWorkFlowPosition = async () => {
        await this.props.startSetWorkflowPosition();
    }

    render() {
        const { position } = this.props;
        if (!position) {
            return (
                <div className="inbox_details_empty">
                    Please select an item to view
                    </div>
            )
        }
        return (
            <div className="inbox_details" >
                <div className="inbox_details_header">
                    <div>
                        <div className="inbox_details_header__title">
                            {position.title}
                        </div>
                        <div className="inbox_details_header__job_id">
                            Job Id: {position.jobId}
                        </div>
                        <div className="inbox_details_header__location">
                            Location: {position.location}
                        </div>
                    </div>
                    <>
                        <Link
                            className="nav_link"
                            to="/applicants"
                            onClick={this.handleSetWorkFlowPosition}
                        >
                            View Applicants
                        </Link>
                    </>
                </div>
                <div className="inbox_details_content">
                    <PositionWatchEditWidget />
                    <PositionDetailsContent position={position} />
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    position: state.position,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
    startSetWorkflowPosition: () => dispatch(startSetWorkflowPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchDetails);

PositionWatchDetails.propTypes = {
    position: PropTypes.object,
    startSetWorkflowPosition: PropTypes.func.isRequired,
};
