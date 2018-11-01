import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ApplicantsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="applicants_list_item">
                <div className="positions_list_item__content">
                    <div className="positions_list_item__displayName">
                        {this.props.displayName}
                    </div>
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapDispatchToProps = () => ({
});

export default connect(undefined, mapDispatchToProps)(ApplicantsListItem);

ApplicantsListItem.propTypes = {
    displayName: PropTypes.string,
};
