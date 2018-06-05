import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingPage from '../core/LoadingPage';
import PositionListWidget from './PositionListWidget';

export class PositionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="positions_container">
                {!this.props.positions && <LoadingPage />}
                {this.props.positions &&
                    <div>
                        <PositionListWidget positions={this.props.positions} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    positions: state.positions
});

export default connect(mapStateToProps)(PositionsContainer);


PositionsContainer.propTypes = {
    positions: PropTypes.array,
};

