import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetPosition } from 'Actions/position';

export class PositionsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetPosition = () => {
        this.props.startSetPosition(this.props.positionId);
    }

    render() {
        return (
            <div className="positions_list_item" onClick={this.handleSetPosition}>
                <div className="positions_list_item__content">
                    <div className="positions_list_item__title">
                        {this.props.title}
                    </div>
                    <div className="positions_list_item__job_id">
                        Job Id: {this.props.jobId}
                    </div>
                </div>
                <div className="positions_list_item__location">
                    {this.props.location}
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startSetPosition: (positionId) => dispatch(startSetPosition(positionId))
});

export default connect(undefined, mapDispatchToProps)(PositionsListItem);

PositionsListItem.propTypes = {
    jobId: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    positionId: PropTypes.string.isRequired,
    startSetPosition: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
