import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesList from 'Shared/note/NotesList';
import { APPLICANT_STATUSES } from 'Tools/constants';
import {
    startAddApplicantNote,
    startSetApplicantStatus
} from 'Actions/applicant';

export class ApplicantProcessContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicantNotes: props.applicant.applicantNotes,
            applicantStatus: props.applicant.applicantStatus,
            isNotePopulated: false,
            isStatusChanged: false,
            noteMessage: '',
            prevApplicantStatus: props.applicant.applicantStatus,
        }
    }

    componentDidUpdate(prevProps) {
        const { applicant: oldApplicant } = prevProps;
        const { applicant: newApplicant } = this.props;

        if (oldApplicant.applicantId !== newApplicant.applicantId) {
            return this.setState(() => ({
                applicantNotes: newApplicant.applicantNotes,
                applicantStatus: newApplicant.applicantStatus,
                isNotePopulated: false,
                isStatusChanged: false,
                noteMessage: '',
                prevApplicantStatus: newApplicant.applicantStatus,
            }));
        }
    }

    handleSetApplicantStatus = (e) => {
        const applicantStatus = e.target.value;
        if (applicantStatus === this.state.prevApplicantStatus) {
            return this.setState(() => ({ applicantStatus, isStatusChanged: false }));
        }
        return this.setState(() => ({ applicantStatus, isStatusChanged: true }));
    }

    handleNoteMessageChange = (e) => {
        const noteMessage = e.target.value;
        if (!this.state.isStatusChanged || !noteMessage) {
            return this.setState(() => ({ isNotePopulated: false, noteMessage: '' }));
        }
        return this.setState(() => ({ isNotePopulated: true, noteMessage }));
    }

    handleSubmitStatusChange = () => {
        const { applicantStatus, isNotePopulated, isStatusChanged, noteMessage } = this.state;
        const { applicantId, positionId } = this.props.applicant;

        if (isNotePopulated && isStatusChanged) {
            this.props.startAddApplicantNote({ applicantId, noteMessage, positionId });
            this.props.startSetApplicantStatus({ applicantId, applicantStatus, positionId });

            return this.setState((prevState) => ({
                applicantNotes: [{ noteMessage }, ...prevState.applicantNotes],
                isNotePopulated: false,
                isStatusChanged: false,
                noteMessage: '',
                prevApplicantStatus: applicantStatus,
            }));
        }
    }

    render() {
        return (
            <div className="applicant_process_container">
                <div className="applicant_process_container__instructions">
                    Please write a note and select a new status to submit
                </div>
                <textarea
                    placeholder="Write a note to change applicant status"
                    value={this.state.noteMessage}
                    onChange={this.handleNoteMessageChange}
                    rows="5"
                >
                </textarea>
                <div className="applicant_process_container__status_change">
                    <select
                        disabled={!this.state.isNotePopulated}
                        onChange={this.handleSetApplicantStatus}
                        value={this.state.applicantStatus}
                    >
                        {APPLICANT_STATUSES.map((applicantStatus, index) =>
                            <option
                                key={index}
                                value={applicantStatus}
                            >
                                {applicantStatus}
                            </option>)}
                    </select>
                    <button
                        disabled={!this.state.isNotePopulated || !this.state.isStatusChanged}
                        onClick={this.handleSubmitStatusChange}
                    >
                        Submit status change
                    </button>
                </div>
                <div className="applicant_process_container__notes">
                    <NotesList notes={this.state.applicantNotes} />
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddApplicantNote: (dataObject) => dispatch(startAddApplicantNote(dataObject)),
    startSetApplicantStatus: (dataObject) => dispatch(startSetApplicantStatus(dataObject)),
});

export default connect(undefined, mapDispatchToProps)(ApplicantProcessContainer);

ApplicantProcessContainer.propTypes = {
    applicant: PropTypes.object.isRequired,
    startAddApplicantNote: PropTypes.func.isRequired,
    startSetApplicantStatus: PropTypes.func.isRequired,
};
