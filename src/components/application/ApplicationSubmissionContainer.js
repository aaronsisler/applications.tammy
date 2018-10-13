import React from 'react';
import { Link } from 'react-router-dom';

export default class ApplicationSubmissionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="application_submission_container">
                <div className="application_submission_container_wrapper">
                    <div className="application_submission_container__content">
                        Thank you for your application! We will be in contact shortly.
                    </div>
                    <div className="application_submission_container__link">
                        <Link className="nav_link" to="/">Back to Positions</Link>
                    </div>
                </div>
            </div>
        );
    }
}
