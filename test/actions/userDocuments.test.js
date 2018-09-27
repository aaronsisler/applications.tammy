import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../src/firebase/firebase';
import { startSetUserDocuments } from 'Actions/userDocuments';
import * as userDocumentActionHelpers from 'Actions/helpers/userDocuments';
import userDocuments from '../fixtures/userDocuments';

const createMockStore = configureMockStore([thunk]);

describe('User Documents Actions', () => {
    const userDocumentsMock = [];
    userDocuments.forEach((userDocument) => {
        const val = () => ({ ...userDocument });
        userDocumentsMock.push({ key: userDocument.userId, val })
    });

    beforeEach(() => {
        const once = jest.fn().mockResolvedValue(userDocumentsMock);
        jest.spyOn(database, 'ref').mockReturnValue({ once });
    })

    afterEach(() => {
        database.ref.mockRestore();
    })

    describe('startSetUserDocuments() method', () => {
        const mockUserId = 'mockUserId';
        it(`should call dispatch with setUserDocuments`, async () => {
            const setUserDocumentsMock = jest.spyOn(userDocumentActionHelpers, 'setUserDocuments');
            const store = createMockStore();

            await store.dispatch(startSetUserDocuments(mockUserId));

            expect(store.getActions().length).toBe(1);
            expect(setUserDocumentsMock).toHaveBeenCalledWith(userDocuments);
        });

        it(`should call database ref with specific path`, async () => {
            const store = createMockStore();

            await store.dispatch(startSetUserDocuments(mockUserId));

            expect(database.ref).toHaveBeenLastCalledWith(`user_documents/${mockUserId}`)
        })
    })
})
