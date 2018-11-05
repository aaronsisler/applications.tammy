import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import selectPositions from 'Selectors/positions';
import PositionApply from 'Position/PositionApply';
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
        const { filters, positions } = this.props;
        const filteredPositions = selectPositions(positions, filters);

        return (
            <div className="positions_container">
                {filteredPositions &&
                    <div className="positions_widget">
                        <div className="positions_list_wrapper">
                            <PositionsListFilter />
                            <PositionsList positions={filteredPositions} />
                        </div>
                        <div className="position_details_wrapper">
                            <PositionDetails />
                            {this.props.position &&
                                <PositionApply />
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    filters: state.filters.positions,
    position: state.position,
    positions: state.positions,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionsContainer);

PositionsContainer.propTypes = {
    filters: PropTypes.object,
    position: PropTypes.object,
    positions: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
};
