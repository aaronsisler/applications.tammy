import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ApplicantProcessContainer from 'Applicant/ApplicantProcessContainer';
import ApplicantUserDocuments from 'Applicant/ApplicantUserDocuments';
import ApplicantUserInfo from 'Applicant/ApplicantUserInfo';

export default class ApplicantDetailsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { applicant } = this.props;
        return (
            <div className="applicant_details_content">
                <Tabs>
                    <TabList>
                        <Tab>Workflow</Tab>
                        <Tab>Documents</Tab>
                        <Tab>Info</Tab>
                    </TabList>

                    <TabPanel>
                        {applicant && <ApplicantProcessContainer applicant={applicant} />}
                    </TabPanel>
                    <TabPanel>
                        {applicant.userDocuments && <ApplicantUserDocuments userDocuments={applicant.userDocuments} />}
                    </TabPanel>
                    <TabPanel>
                        {applicant.user && <ApplicantUserInfo user={applicant.user} />}
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

ApplicantDetailsContent.propTypes = {
    applicant: PropTypes.object.isRequired,
};
