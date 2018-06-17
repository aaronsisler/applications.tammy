import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ApplicationProgressButtonsWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="application_progress_buttons_widget">
                <div className="application_progress_buttons_wrapper">
                    {this.props.currentStep > 0 &&
                        <button className="button" onClick={this.props.handleDecrementCurrentStep}>Previous Step</button>
                    }
                    {this.props.currentStep < (this.props.maxSteps - 2) &&
                        <button className="button" onClick={this.props.handleIncrementCurrentStep}>Save and Continue</button>
                    }
                    {this.props.currentStep == (this.props.maxSteps - 2) &&
                        <button className="button" onClick={this.props.handleIncrementCurrentStep}>Submit Application</button>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProgressButtonsWidget);

ApplicationProgressButtonsWidget.propTypes = {
    currentStep: PropTypes.number.isRequired,
    maxSteps: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
};
