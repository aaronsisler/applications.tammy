import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PositionWatchSubscriptionLevel from './PositionWatchSubscriptionLevel';
import PositionDetailsContent from '../shared/position/PositionDetailsContent';

export class PositionWatchDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { position, positionWatched } = this.props;
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
                            </div>
                            <div className="position_watch_details__subscription_level">
                                <PositionWatchSubscriptionLevel
                                    id={positionWatched.id}
                                    subscriptionLevel={positionWatched.subscriptionLevel}
                                />
                            </div>
                        </div>
                        <div className="position_watch_details_link">
                            <Link
                                className="nav_link"
                                to={`position/${position.id}`}
                            >
                                Go to Position Workflow
                            </Link>
                        </div>
                        <PositionDetailsContent position={position} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    position: state.position,
    positionWatched: state.positionWatch.position,
});

export default connect(mapStateToProps)(PositionWatchDetails);


PositionWatchDetails.propTypes = {
    position: PropTypes.object,
    positionWatched: PropTypes.object,
};

