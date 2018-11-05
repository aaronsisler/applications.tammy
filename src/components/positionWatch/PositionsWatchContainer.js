import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { startClearPosition } from 'Actions/position';
import PositionsList from 'Shared/position/PositionsList';
import PositionWatchDetails from 'PositionWatch/PositionWatchDetails';

export class PositionsWatchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.startClearPosition();
    }

    render() {
        return (
            <div className="position_watch_container">
                {this.props.positionsWatched &&
                    <div className="position_watch_widget">
                        <div className="position_watch_list__wrapper">
                            <Link className="nav_link" to="/position_watch_add">Add Position Watch</Link>
                            <PositionsList positions={this.props.positionsWatched} />
                        </div>
                        <div className="position_watch_details__wrapper">
                            <PositionWatchDetails />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    positionsWatched: state.positionsWatched,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsWatchContainer);

PositionsWatchContainer.propTypes = {
    positionsWatched: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
};

