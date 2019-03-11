import React from 'react';
import PositionsWatchContainer from 'PositionWatch/PositionsWatchContainer';

const DashboardPage = (props) => (
    <div id="dashboard_page">
        <PositionsWatchContainer {...props} />
    </div>
);

export default DashboardPage;
