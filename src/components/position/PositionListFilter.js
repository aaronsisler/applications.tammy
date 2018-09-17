import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPositionsTextFilter } from 'Actions/filters/positionsText';

export class PositionListFilter extends React.Component {
    onTextChange = (e) => {
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

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    filters: state.filters.positions
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    setPositionsTextFilter: (text) => dispatch(setPositionsTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionListFilter);

PositionListFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    setPositionsTextFilter: PropTypes.func.isRequired,
};

