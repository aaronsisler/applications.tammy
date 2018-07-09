import React from 'react';
import ApplicationProcessContainer from './ApplicationProcessContainer';

export default class ApplicationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="application_page">
                <ApplicationProcessContainer />
            </div>
        );
    }
}
