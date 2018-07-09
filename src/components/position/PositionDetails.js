import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PositionDetailsContent from '../shared/position/PositionDetailsContent';

export class PositionDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { position } = this.props;
        return (
            <div className="position_details">
                {!position &&
                    <div className="empty">
                        Please select an item to view
                    </div>
                }
                {position &&
                    <div className="position_details_widget">
                        <div className="position_details_header">
                            <div>
                                <div className="position_details__title">
                                    {position.title}
                                </div>
                                <div className="position_details__job_id">
                                    Job Id: {position.jobId}
                                </div>
                            </div>
                            <div className="position_details__location">
                                {position.location}
                            </div>
                        </div>
                        <PositionDetailsContent position={position} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    position: state.position
});

export default connect(mapStateToProps)(PositionDetails);


PositionDetails.propTypes = {
    position: PropTypes.object,
};

