import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PositionsList from 'Shared/position/PositionsList';
import PositionWatchAddDetails from 'PositionWatch/PositionWatchAddDetails';

export class PositionsWatchAddContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMobileClassname = () => this.props.positionId ? "inbox_mobile" : ""

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
                        <div className={`inbox_list ${this.handleMobileClassname()}`}>
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
const mapStateToProps = (state, props) => ({
    positionId: props.match.params.positionId,
    positions: state.positions,
    positionsWatched: state.positionsWatched,
});

export default connect(mapStateToProps)(PositionsWatchAddContainer);

PositionsWatchAddContainer.propTypes = {
    positionId: PropTypes.string,
    positions: PropTypes.array,
    positionsWatched: PropTypes.array,
};

