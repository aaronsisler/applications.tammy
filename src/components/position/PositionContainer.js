import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingPage from '../core/LoadingPage';
import PositionList from './PositionList';
import PositionDetails from './PositionDetails';

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
                        <PositionList positions={this.props.positions} />
                        <PositionDetails />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    positions: state.positions
});

export default connect(mapStateToProps)(PositionContainer);


PositionContainer.propTypes = {
    positions: PropTypes.array,
};

