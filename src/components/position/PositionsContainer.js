import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectPositions from 'Selectors/positions';
import PositionsList from './PositionsList';
import PositionsListFilter from './PositionsListFilter';
import PositionDetails from './PositionDetails';

export class PositionsContainer extends React.Component {
    constructor(props) {
        super(props);
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
    positions: state.positions,
});

export default connect(mapStateToProps)(PositionsContainer);

PositionsContainer.propTypes = {
    filters: PropTypes.object,
    positions: PropTypes.array,
};
