import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'Tools/history';
import PositionDetailsContent from 'Position/PositionDetailsContent';
import PositionApply from 'Position/PositionApply';

export class PositionDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNavigateBack = () => history.push('/positions');

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
                    <button
                        className="inbox_details_header__mobile_button"
                        onClick={this.handleNavigateBack}
                    >
                        Back to List
                    </button>
                    <div className="inbox_details_header__content">
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
                    <div className="inbox_details_header__apply">
                        <PositionApply positionId={position.positionId} />
                    </div>
                </div>
                <div className="inbox_details_content">
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
        ? state.positions.find((statePosition) => statePosition.positionId == positionId)
        : undefined;

    return ({
        position,
    });
};

export default connect(mapStateToProps)(PositionDetails);

PositionDetails.propTypes = {
    position: PropTypes.object,
};
