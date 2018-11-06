import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class ApplicantDetailsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="applicant_details_content">
                <Tabs>
                    <TabList>
                        <Tab>Workflow</Tab>
                        <Tab>Documents</Tab>
                        <Tab>Info</Tab>
                    </TabList>

                    <TabPanel>
                        This is the Applicant Workflow
                    </TabPanel>
                    <TabPanel>
                        This is the Applicant Documents
                    </TabPanel>
                    <TabPanel>
                        This is the Applicant Info
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

ApplicantDetailsContent.propTypes = {
    applicant: PropTypes.object.isRequired,
};
