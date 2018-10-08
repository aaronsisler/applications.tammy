import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../../tools/history';
import { startClearApplication } from 'Actions/application';
import { startDecrementCurrentStep, startIncrementCurrentStep } from 'Actions/applicationProcess';
import ApplicationProgressWidget from './ApplicationProgressWidget';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';

export class ApplicationProcessContainer extends React.Component {
    constructor(props) {
        super(props);

        if (!props.position) {
            return history.push('/');
        }

        this.state = {
            position: props.position,
        }
    }

    componentWillUnmount() {
        this.props.startClearApplication();
    }

    render() {
        return (
            <div className="application_process_container">
                <ApplicationProgressWidget />
                <ApplicationProgressButtonsWidget
                    handleDecrementCurrentStep={this.props.startDecrementCurrentStep}
                    handleIncrementCurrentStep={this.props.startIncrementCurrentStep}
                />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    position: state.position,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplication: () => dispatch(startClearApplication()),
    startDecrementCurrentStep: () => dispatch(startDecrementCurrentStep()),
    startIncrementCurrentStep: () => dispatch(startIncrementCurrentStep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProcessContainer);

ApplicationProcessContainer.propTypes = {
    position: PropTypes.object,
    startClearApplication: PropTypes.func.isRequired,
    startDecrementCurrentStep: PropTypes.func.isRequired,
    startIncrementCurrentStep: PropTypes.func.isRequired,
};
