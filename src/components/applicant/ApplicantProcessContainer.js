import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesList from 'Shared/notes/NotesList';
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
            applicantNotes: props.applicant.applicantNotes.reverse(),
            statusNote: '',
        }
    }

    handleAddStatusNote = () => {
        const { statusNote } = this.state;
        this.props.startAddApplicantNote(statusNote);
        return this.setState((prevState) => ({ applicantNotes: [{ statusNote }, ...prevState.applicantNotes], statusNote: '' }));
    }

    handleSetApplicantStatus = (e) => {
        const applicantStatus = e.target.value;
        return this.setState(() => ({ applicantStatus }));
    }

    handleStatusNoteChange = (e) => {
        const statusNote = e.target.value;
        return this.setState(() => ({ statusNote }));
    }

    handleSubmitStatusChange = () => this.props.startSetApplicantStatus(this.state.applicantStatus);

    render() {
        const { applicant } = this.props;
        return (
            <div className="applicant_process_container">
                <div className="applicant_process_container__select">
                    <select
                        className="select"
                        value={this.state.applicantStatus}
                        onChange={this.handleSetApplicantStatus}
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
                        onClick={this.handleSubmitStatusChange}
                        className="button"
                    >
                        Update status
                    </button>
                </div>
                <div className="applicant_process_container__status_change_note">
                    <textarea
                        placeholder="Add a note to change applicant status"
                        className="textarea"
                        value={this.state.statusNote}
                        onChange={this.handleStatusNoteChange}
                        cols="100"
                        rows="5"
                    >
                    </textarea>
                    <button
                        onClick={this.handleAddStatusNote}
                        className="button"
                    >
                        Add note
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
