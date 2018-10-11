import React from 'react';
import { shallow } from 'enzyme';
import { UserDocumentsSelectionListItem } from 'Shared/userDocuments/UserDocumentsSelectionListItem';
import userDocuments from '../../../fixtures/userDocuments';

describe('UserDocumentsSelectionListItem', () => {
    const [userDocument] = userDocuments;
    const { userDocumentId } = userDocument;
    let wrapper;
    const startAddApplicationUserDocument = jest.fn();
    const startRemoveApplicationUserDocument = jest.fn();

    const buildWrapper = (isDocumentAdded) => {
        wrapper = shallow(
            <UserDocumentsSelectionListItem
                isDocumentAdded={isDocumentAdded}
                startAddApplicationUserDocument={startAddApplicationUserDocument}
                startRemoveApplicationUserDocument={startRemoveApplicationUserDocument}
                {...userDocument}
            />);
    }

    describe('when isDocumentAdded is TRUE', () => {
        beforeEach(() => {
            buildWrapper(true);
        });

        it('should render UserDocumentsSelectionListItem correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should render UserDocumentsSelectionListItem correctly after click', () => {
            wrapper.find('.user_documents_selection_list_item').simulate('click');
            expect(wrapper).toMatchSnapshot();
        });

        it('should call startRemoveApplicationUserDocument when clicked', () => {
            wrapper.find('.user_documents_selection_list_item').simulate('click');
            expect(startRemoveApplicationUserDocument).toHaveBeenLastCalledWith(userDocumentId);
        });
    });

    describe('when isDocumentAdded is FALSE', () => {
        beforeEach(() => {
            buildWrapper(false);
        });

        it('should render UserDocumentsSelectionListItem correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should render UserDocumentsSelectionListItem correctly after click', () => {
            wrapper.find('.user_documents_selection_list_item').simulate('click');
            expect(wrapper).toMatchSnapshot();
        });

        it('should call startRemoveApplicationUserDocument when clicked', () => {
            wrapper.find('.user_documents_selection_list_item').simulate('click');
            expect(startAddApplicationUserDocument).toHaveBeenLastCalledWith(userDocumentId);
        });
    });
});
