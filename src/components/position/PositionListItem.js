import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetPosition } from '../../actions/position';

export class PositionListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetPosition = () => {
        this.props.startSetPosition(this.props.id);
    }

    render() {
        return (
            <div className="position_list_item" onClick={this.handleSetPosition}>
                <div className="position_list_item__content">
                    <div className="position_list_item__title">
                        {this.props.title}
                    </div>
                    <div className="position_list_item__job_id">
                        Job Id: {this.props.jobId}
                    </div>
                </div>
                <div className="position_list_item__location">
                    {this.props.location}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetPosition: (id) => dispatch(startSetPosition(id))
});

export default connect(undefined, mapDispatchToProps)(PositionListItem);

PositionListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    jobId: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startSetPosition: PropTypes.func.isRequired,
};