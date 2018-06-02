import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PositionListItem = ({ id, title, jobId }) => (
    <Link className="position_list_item" to={`/position/${id}`}>
        <div>
            <h3 className="position_list_item_title">{title}</h3>
        </div>
        <h3 className="position_list_item_job_id">
            {jobId}
        </h3>
    </Link>
);

export default PositionListItem;

PositionListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    jobId: PropTypes.string.isRequired,
};
