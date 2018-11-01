import React from 'react';
import ApplicantsContainer from 'Applicant/ApplicantsContainer';

export default class ApplicantsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="applicants_page">
                <ApplicantsContainer />
            </div>
        );
    }
}
