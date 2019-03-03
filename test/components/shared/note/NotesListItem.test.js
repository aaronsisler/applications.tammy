import React from 'react';
import { shallow } from 'enzyme';
import NotesListItem from 'Shared/note/NotesListItem';
import { note } from '../../../fixtures/notes';

describe('NotesListItem', () => {
    let wrapper;
    const { noteMessage } = note;

    beforeEach(() => {
        wrapper = shallow(
            <NotesListItem
                noteMessage={noteMessage}
            />
        );
    })

    it('should render NotesListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
