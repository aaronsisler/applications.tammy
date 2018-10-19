import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import { startSetPositionsWatched } from 'Actions/positionsWatched';
import PositionsList from 'Position/PositionsList';
import PositionWatchDetails from 'PositionWatch/PositionWatchDetails';

export class PositionsWatchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.startSetPositionsWatched();
    }

    componentWillUnmount() {
        this.props.startClearPosition();
    }

    render() {
        const { positions, positionsWatched } = this.props;
        const positionsConcat = [];
        positionsWatched.map((positionWatched) => {
            const positionFind = positions.find((position) => positionWatched.positionId === position.positionId);
            if (positionFind) {
                positionsConcat.push({ ...positionFind, ...positionWatched })
            }
        });

        return (
            <div className="position_watch_container">
                {this.props.positionsWatched &&
                    <div className="position_watch_widget">
                        <div className="position_watch_list__wrapper">
                            <PositionsList positions={positionsConcat} />
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
    positions: state.positions,
    positionsWatched: state.positionsWatched,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
    startSetPositionsWatched: () => dispatch(startSetPositionsWatched()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsWatchContainer);

PositionsWatchContainer.propTypes = {
    positions: PropTypes.array,
    positionsWatched: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
    startSetPositionsWatched: PropTypes.func.isRequired,
};

