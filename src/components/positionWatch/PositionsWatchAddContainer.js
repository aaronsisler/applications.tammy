import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import PositionsList from 'Shared/position/PositionsList';
import PositionWatchAddDetails from 'PositionWatch/PositionWatchAddDetails';

export class PositionsWatchAddContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.startClearPosition();
    }

    render() {
        const { positions, positionsWatched } = this.props;
        const positionsConcat = [];
        positions.map((position) => {
            const positionFind = positionsWatched.find((positionWatched) => positionWatched.positionId === position.positionId);
            if (!positionFind) {
                positionsConcat.push({ ...position });
            }
        });

        return (
            <div className="inbox_container">
                {this.props.positionsWatched &&
                    <div className="inbox_widget">
                        <div className="inbox_list">
                            <Link className="nav_link" to="/dashboard">Back to Dashboard</Link>
                            <PositionsList positions={positionsConcat} linkRoute={'position_watch_add'} />
                        </div>
                        <PositionWatchAddDetails {...this.props} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    positions: state.positions,
    positionsWatched: state.positionsWatched,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsWatchAddContainer);

PositionsWatchAddContainer.propTypes = {
    positions: PropTypes.array,
    positionsWatched: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
};

