import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PositionsList from 'Shared/position/PositionsList';
import PositionWatchDetails from 'PositionWatch/PositionWatchDetails';

export class PositionsWatchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMobileClassname = () => this.props.positionId ? "inbox_mobile" : ""

    render() {
        return (
            <div className="inbox_container">
                {this.props.positionsWatched &&
                    <div className="inbox_widget">
                        <div className={`inbox_list ${this.handleMobileClassname()}`}>
                            <Link className="nav_link" to="/a">Add Position Watch</Link>
                            <PositionsList positions={this.props.positionsWatched} linkRoute={'dashboard'} />
                        </div>
                        <PositionWatchDetails {...this.props} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => ({
    positionId: props.match.params.positionId,
    positionsWatched: state.positionsWatched,
});

export default connect(mapStateToProps)(PositionsWatchContainer);

PositionsWatchContainer.propTypes = {
    positionId: PropTypes.string,
    positionsWatched: PropTypes.array,
};

