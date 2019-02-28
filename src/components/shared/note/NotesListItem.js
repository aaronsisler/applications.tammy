import React from 'react';
import PropTypes from 'prop-types';

export default class NotesListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // cols="75"
        return (
            <div className="notes_list_item">
                <div className="notes_list_item__status_note">
                    <textarea
                        readOnly={true}
                        rows="5"
                        value={this.props.statusNote}
                    >
                    </textarea>
                </div>
            </div>
        );
    }
}

NotesListItem.propTypes = {
    statusNote: PropTypes.string.isRequired,
};
