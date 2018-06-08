import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutPage = () => (
    <div id="logged_out_page">
        <div className="logged_out_content">
            You have been logged out.
        </div>
        <div className="logged_out_link">
            <Link className="navbar_link" to="/login">Back to Login</Link>
            <Link className="navbar_link" to="/">Back to Positions</Link>
        </div>
    </div>
);

export default LoggedOutPage;
