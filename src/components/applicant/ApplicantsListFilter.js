import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetApplicantsTextFilter } from 'Actions/applicants';

export class ApplicantsListFilter extends React.Component {
    onTextChange = (e) => {
        this.props.startSetApplicantsTextFilter(e.target.value);
    }

    render() {
        return (
            <div className="applicants_list_filters">
                <input
                    type="text"
                    className="applicants_list_filters__input"
                    placeholder="Search applicants"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    filters: state.filters.applicants
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startSetApplicantsTextFilter: (text) => dispatch(startSetApplicantsTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsListFilter);

ApplicantsListFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    startSetApplicantsTextFilter: PropTypes.func.isRequired,
};

