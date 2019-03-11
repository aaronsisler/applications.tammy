import React from 'react';
import PropTypes from 'prop-types';
import NotesListItem from 'Shared/note/NotesListItem';

export default class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
