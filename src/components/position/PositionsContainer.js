import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectPositions from 'Selectors/positions';
import PositionDetails from 'Position/PositionDetails';
import PositionsList from 'Shared/position/PositionsList';
import PositionsListFilter from 'Position/PositionsListFilter';

export class PositionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMobileClassname = () => this.props.positionId ? "inbox_mobile" : "";

    render() {
        return (
            <div className="inbox_container">
                {this.props.positions &&
                    <div className="inbox_widget">
                        <div className={`inbox_list ${this.handleMobileClassname()}`}>
                            <PositionsListFilter />
                            <PositionsList positions={this.props.positions} linkRoute="positions" />
                        </div>
                        <PositionDetails {...this.props} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => ({
    positionId: props.match.params.positionId,
    positions: selectPositions(state.positions, state.filters.positions),
});

export default connect(mapStateToProps)(PositionsContainer);

PositionsContainer.propTypes = {
    positionId: PropTypes.string,
    positions: PropTypes.array,
};
