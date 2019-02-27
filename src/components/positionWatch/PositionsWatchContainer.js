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

    handleMobileClassname = () => this.props.positionId ? "inbox_mobile" : ""

    render() {
        return (
            <div className="inbox_container">
                {this.props.positionsWatched &&
                    <div className="inbox_widget">
                        <div className={`inbox_list ${this.handleMobileClassname()}`}>
                            <Link className="nav_link" to="/position_watch_add">Add Position Watch</Link>
                            <PositionsList positions={this.props.positionsWatched} linkRoute={'dashboard'} />
                        </div>
                        <PositionWatchDetails {...this.props} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => ({
    positionId: props.match.params.positionId,
    positionsWatched: state.positionsWatched,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsWatchContainer);

PositionsWatchContainer.propTypes = {
    positionId: PropTypes.string,
    positionsWatched: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
};

