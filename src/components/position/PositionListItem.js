import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PositionListItem = ({ id, title, jobId, location }) => (
    <Link className="position_list_item" to={`/position/${id}`}>
        <div className="position_list_item__content">
            <div className="position_list_item__title">
                {title}
            </div>
            <div className="position_list_item__job_id">
                Job Id: {jobId}
            </div>
        </div>
        <div className="position_list_item__location">
            {location}
        </div>
    </Link>
);

export default PositionListItem;

PositionListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    jobId: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};
