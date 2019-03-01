import React from 'react';
import PropTypes from 'prop-types';

export default class NotesListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notes_list_item">
                <textarea
                    readOnly={true}
                    rows="5"
                    value={this.props.noteMessage}
                >
                </textarea>
            </div>
        );
    }
}

NotesListItem.propTypes = {
    noteMessage: PropTypes.string.isRequired,
};
