import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPositionsTextFilter } from '../../actions/filters/positionsText';

class PositionListFilters extends React.Component {
    onTextChange = e => {
        this.props.setPositionsTextFilter(e.target.value);
    }

    render() {
        return (
            <div className="position_list_filters">
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
    filters: state.filters.positions
});

const mapDispatchToProps = (dispatch) => ({
    setPositionsTextFilter: (text) => dispatch(setPositionsTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionListFilters);

PositionListFilters.propTypes = {
    setPositionsTextFilter: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
};

