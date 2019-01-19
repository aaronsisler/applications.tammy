import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import selectPositions from 'Selectors/positions';
import PositionDetails from 'Position/PositionDetails';
import PositionsList from 'Shared/position/PositionsList';
import PositionsListFilter from 'Position/PositionsListFilter';

export class PositionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.startClearPosition();
    }

    render() {
        return (
            <div className="inbox_container">
                {this.props.positions &&
                    <div className="inbox_widget">
                        <div className="inbox_list">
                            <PositionsListFilter />
                            <PositionsList positions={this.props.positions} />
                        </div>
                        <PositionDetails />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    positions: selectPositions(state.positions, state.filters.positions),
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsContainer);

PositionsContainer.propTypes = {
    positions: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
};
