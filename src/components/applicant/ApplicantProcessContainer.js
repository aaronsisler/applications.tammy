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
            applicantStatus: props.applicant.applicantStatus,
            applicantNotes: props.applicant.applicantNotes,
            isNotePopulated: false,
            isStatusChanged: false,
            prevApplicantStatus: props.applicant.applicantStatus,
            statusNote: '',
        }
    }

    handleSetApplicantStatus = (e) => {
        const applicantStatus = e.target.value;
        if (applicantStatus === this.state.prevApplicantStatus) {
            return this.setState(() => ({ applicantStatus, isStatusChanged: false }));
        }
        return this.setState(() => ({ applicantStatus, isStatusChanged: true }));
    }

    handleStatusNoteChange = (e) => {
        const statusNote = e.target.value;
        if (statusNote) {
            return this.setState(() => ({ isNotePopulated: true, statusNote }));
        }
        return this.setState(() => ({ isNotePopulated: false, statusNote }));
    }

    handleSubmitStatusChange = () => {
        const { applicantStatus, isNotePopulated, isStatusChanged, statusNote } = this.state;
        if (isNotePopulated && isStatusChanged) {
            this.props.startAddApplicantNote(statusNote);
            this.props.startSetApplicantStatus(applicantStatus);
            return this.setState((prevState) => ({
                applicantNotes: [{ statusNote }, ...prevState.applicantNotes],
                isNotePopulated: false,
                isStatusChanged: false,
                prevApplicantStatus: applicantStatus,
                statusNote: '',
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
                    className="applicant_process_container__note"
                    value={this.state.statusNote}
                    onChange={this.handleStatusNoteChange}
                    cols="75"
                    rows="5"
                >
                </textarea>
                <div className="applicant_process_container__status_change">
                    <select
                        className="applicant_process_container__select"
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
                        className="button"
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
const mapStateToProps = () => ({
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddApplicantNote: (statusNote) => dispatch(startAddApplicantNote(statusNote)),
    startSetApplicantStatus: (applicantStatus) => dispatch(startSetApplicantStatus(applicantStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantProcessContainer);

ApplicantProcessContainer.propTypes = {
    applicant: PropTypes.object.isRequired,
    startAddApplicantNote: PropTypes.func.isRequired,
    startSetApplicantStatus: PropTypes.func.isRequired,
};
