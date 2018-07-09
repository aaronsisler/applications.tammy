import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetPosition } from '../../actions/position';
import { startSetPositionWatched } from '../../actions/position_watch';

export class PositionWatchListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetPositionWatched = () => {
        this.props.startSetPosition(this.props.id);
        this.props.startSetPositionWatched(this.props.id);
    }

    render() {
        return (
            <div className="position_watch_list_item" onClick={this.handleSetPositionWatched}>
                <div className="position_watch_list_item__content">
                    <div className="position_watch_list_item__title">
                        {this.props.title}
                    </div>
                    <div className="position_watch_list_item__job_id">
                        Job Id: {this.props.jobId}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetPosition: (id) => dispatch(startSetPosition(id)),
    startSetPositionWatched: (id) => dispatch(startSetPositionWatched(id)),
});

export default connect(undefined, mapDispatchToProps)(PositionWatchListItem);

PositionWatchListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    jobId: PropTypes.string.isRequired,
    startSetPosition: PropTypes.func.isRequired,
    startSetPositionWatched: PropTypes.func.isRequired,
};
