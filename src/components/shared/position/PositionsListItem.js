import React from 'react';
import PropTypes from 'prop-types';
import history from 'Tools/history';

export class PositionsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetPositionId = () => history.push(`/${this.props.positionId}`);

    render() {
        return (
            <div className="positions_list_item" onClick={this.handleSetPositionId}>
                <div className="positions_list_item__content">
                    <div className="positions_list_item__title">
                        {this.props.title}
                    </div>
                    <div className="positions_list_item__job_id">
                        Job Id: {this.props.jobId}
                    </div>
                </div>
                <div className="positions_list_item__location">
                    {this.props.location}
                </div>
            </div>
        );
    }
}

export default PositionsListItem;

PositionsListItem.propTypes = {
    jobId: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    positionId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
