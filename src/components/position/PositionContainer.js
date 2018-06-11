import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectPositions from '../../selectors/positions';
import LoadingPage from '../core/LoadingPage';
import PositionList from './PositionList';
import PositionDetails from './PositionDetails';
import PositionListFilter from './PositionListFilter';

// <div className="taco">
// <PositionListFilter />

export class PositionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="position_container">
                {!this.props.positions && <LoadingPage />}
                {this.props.positions &&
                    <div className="position_widget">
                        <div className="taco">
                            <PositionListFilter />
                            <PositionList positions={this.props.positions} />
                        </div>
                        <PositionDetails />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    positions: selectPositions(state.positions, state.filters.positions)
});

export default connect(mapStateToProps)(PositionContainer);


PositionContainer.propTypes = {
    positions: PropTypes.array,
};

