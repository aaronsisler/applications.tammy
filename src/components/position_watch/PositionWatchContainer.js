import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectPositionsWatched from '../../selectors/positionWatch';
import LoadingPage from '../core/LoadingPage';
import PositionWatchList from './PositionWatchList';
import PositionWatchListFilter from './PositionWatchListFilter';
import PositionWatchDetails from './PositionWatchDetails';
import { startClearPosition } from '../../actions/position';
import { startClearPositionWatched } from '../../actions/position_watch';

export class PositionWatchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.startClearPosition();
        this.props.startClearPositionWatched();
    }

    render() {
        return (
            <div className="position_watch_container">
                {!this.props.positions && <LoadingPage />}
                {this.props.positions &&
                    <div className="position_watch_widget">
                        <div className="position_watch_list_wrapper">
                            <PositionWatchListFilter />
                            <PositionWatchList positions={this.props.positions} />
                        </div>
                        <div className="position_watch_details_wrapper">
                            <PositionWatchDetails />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    positions: selectPositionsWatched(state.positionWatch.positions, state.filters.positionWatch),
});

const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
    startClearPositionWatched: () => dispatch(startClearPositionWatched()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchContainer);

PositionWatchContainer.propTypes = {
    positions: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
    startClearPositionWatched: PropTypes.func.isRequired,
};

