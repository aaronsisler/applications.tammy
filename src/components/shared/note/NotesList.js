import React from 'react';
import PropTypes from 'prop-types';
import NotesListItem from 'Shared/note/NotesListItem';

export default class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.notes.length === 0) {
            return (
                <div className="notes_list__empty">
                    No available notes
                </div>
            );
        }

        return (
            <div className="notes_list">
                {
                    this.props.notes.map((note, index) =>
                        <NotesListItem
                            key={index}
                            {...note}
                        />)
                }
            </div>
        );
    }
}

NotesList.propTypes = {
    notes: PropTypes.array,
};
