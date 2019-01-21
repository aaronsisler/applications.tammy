import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkWrapper from 'Shared/universal/LinkWrapper';
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

    renderNoWatchedPosition = () => (
        <div className="inbox_details_empty">
            Position is not currently being watched. Please make sure to add a watch.
        </div>
    )

    renderNoPosition = () => (
        <div className="inbox_details_empty">
            Please select an item to view
        </div>
    )

    render() {
        const { position } = this.props;
        if (this.props.positionId && !this.props.position) {
            return this.renderNoWatchedPosition();
        }
        if (!this.props.position) {
            return this.renderNoPosition();
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
                    <LinkWrapper
                        linkText="View Applicants"
                        onClick={this.handleSetWorkFlowPosition}
                        to="/applicants"
                    />
                </div>
                <div className="inbox_details_content position_watch_details">
                    <PositionWatchEditWidget positionId={this.props.positionId} />
                    <PositionDetailsContent position={position} />
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => {
    const { id: positionId } = props.match.params;
    const position = positionId
        ? state.positionsWatched.find((statePosition) => statePosition.positionId == positionId)
        : undefined;

    return ({
        position,
        positionId,
    });
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
    startSetWorkflowPosition: () => dispatch(startSetWorkflowPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchDetails);

PositionWatchDetails.propTypes = {
    position: PropTypes.object,
    positionId: PropTypes.string,
    startSetWorkflowPosition: PropTypes.func.isRequired,
};
