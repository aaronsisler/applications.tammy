import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PositionDetailsContent from 'Position/PositionDetailsContent';
import PositionWatchAddWidget from 'PositionWatch/PositionWatchAddWidget';

export class PositionWatchAddDetails extends React.Component {
    constructor(props) {
        super(props);
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
                </div>
                <div className="inbox_details_content position_watch_details">
                    <PositionWatchAddWidget />
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

export default connect(mapStateToProps)(PositionWatchAddDetails);

PositionWatchAddDetails.propTypes = {
    position: PropTypes.object,
};

