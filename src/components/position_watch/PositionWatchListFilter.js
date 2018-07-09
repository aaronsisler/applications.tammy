import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPositionWatchTextFilter } from '../../actions/filters';

class PositionWatchListFilters extends React.Component {
    onTextChange = e => {
        this.props.setPositionWatchTextFilter(e.target.value);
    }

    render() {
        return (
            <div className="position_watch_list_filters">
                <div className="input_group__item">
                    <input
                        type="text"
                        className="text_input"
                        placeholder="Search positions"
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters.positionWatch
});

const mapDispatchToProps = (dispatch) => ({
    setPositionWatchTextFilter: (text) => dispatch(setPositionWatchTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchListFilters);

PositionWatchListFilters.propTypes = {
    setPositionWatchTextFilter: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
};

