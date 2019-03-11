import React from 'react';
import { shallow } from 'enzyme';
import NotesList from 'Shared/note/NotesList';
import notes from '../../../fixtures/notes';

describe('NotesList', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <NotesList
                notes={notes}
            />
        );
    })

    it('should render NotesList correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
