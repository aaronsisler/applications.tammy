import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PositionDetailsContent from 'Position/PositionDetailsContent';
import PositionWatchEditWidget from 'PositionWatch/PositionWatchEditWidget';

export class PositionWatchDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { position } = this.props;
        return (
            <div className="position_watch_details">
                {!position &&
                    <div className="empty">
                        Please select an item to view
                    </div>
                }
                {position &&
                    <div className="position_watch_details_widget">
                        <div className="position_watch_details_header">
                            <div>
                                <div className="position_watch_details__title">
                                    {position.title}
                                </div>
                                <div className="position_watch_details__job_id">
                                    Job Id: {position.jobId}
                                </div>
                                <div className="position_watch_details__location">
                                    Location: {position.location}
                                </div>
                            </div>
                            <div>
                                <Link
                                    className="nav_link"
                                    to="/applicants"
                                >
                                    View Applicants
                                </Link>
                            </div>
                        </div>
                        <PositionWatchEditWidget />
                        <PositionDetailsContent position={position} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    position: state.position,
});

export default connect(mapStateToProps)(PositionWatchDetails);

PositionWatchDetails.propTypes = {
    position: PropTypes.object,
};
